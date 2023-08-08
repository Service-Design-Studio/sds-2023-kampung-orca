require 'json'
require 'httparty'

class ApplicationController < ActionController::API
  before_action :set_authentication

  private
  def authenticate_user
    current_user #called to verify user
    # Add your authentication logic here
    # For example, you can check if the user is logged in and redirect to a login page if not
    if @current_user[:user_id] == nil
      head 401
    end
  end

  def current_user
    if ENV["ADMIN"] == @token && Rails.env.development?
      @current_user = {token: "admin", user_id: "admin", name: @token}
    elsif ENV["NORMAL_USER"] == @token && Rails.env.development?
      @current_user = {token: "admin", user_id: "admin", name: @token} # modify this line to change the user account for Mohammad
    elsif ENV["NORMAL_USER2"] == @token && Rails.env.development?
      @current_user = {token: "admin", user_id: "admin", name: @token} # modify this line to change the user account for ALoysius
    elsif ENV["ML_TOKEN"] == @token
      @current_user = {token: "admin", user_id: "admin", name: "Kampung Kaki"}
    else
      current_user = HTTParty.post(ENV["USER_URL"] + "/user/verify_token", {
        body: {token: @token}.to_json,
        headers: {
          'Content-Type' => 'application/json',
          'charset' => 'utf-8'
        }
      }).parsed_response
      @current_user = current_user.transform_keys(&:to_sym)
    end
  end

  def set_authentication
    @token = params["token"]
    @code = params["code"]
  end
end
