

require 'net/http'
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
    if @code != nil
      current_user = HTTParty.post(ENV["USER_URL"] + "/user/authorization_code_exchange", {
        :body => {code: @code}.to_json,
        headers: {
          'Content-Type' => 'application/json',
          'charset' => 'utf-8'
        }
      }).parsed_response


    else
      current_user = HTTParty.post(ENV["USER_URL"] + "/user/verify_token", {
        body: {token: @token}.to_json,
        headers: {
          'Content-Type' => 'application/json',
          'charset' => 'utf-8'
        }
      }).parsed_response

      @current_user = current_user.transform_keys(&:to_sym)


      

      # response_forum = HTTParty.post("http://localhost:3003", {
      #   body: {user_id: @current_user[:user_id]}.to_json,
      #   headers: {
      #     'Content-Type' => 'application/json',
      #     'charset' => 'utf-8'
      #   }
      # }).parsed_response


    end
    # Implement the logic to retrieve the current user
    # This could involve checking session variables, cookies, or database queries
    # and return the currently authenticated user with access token if available
  end

  def set_authentication
    @token = params["token"]
    @code = params["code"]
  end
end
