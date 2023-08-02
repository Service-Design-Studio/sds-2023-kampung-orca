class UserController < ApplicationController
  before_action :authenticate_user, only: [:profile]

  def authorization_code_exchange
    current_user = HTTParty.post(ENV["USER_URL"] + "/user/authorization_code_exchange", {
      :body => {code: @code}.to_json,
      headers: {
        'Content-Type' => 'application/json',
        'charset' => 'utf-8'
      }
    }).parsed_response.transform_keys(&:to_sym)

    response_curriculum = HTTParty.post(ENV["CURRICULUM_URL"] + "/user", {
      body: {user_id: current_user[:user_id]}.to_json,
      headers: {
        'Content-Type' => 'application/json',
        'charset' => 'utf-8'
      }
    })
    p "Status Code: #{response_curriculum.code}, Status Message: #{response_curriculum.message}"
    
    response_forum = HTTParty.post(ENV["FORUM_URL"] + "/user/create", {
      body: {user_id: current_user[:user_id], name: current_user[:name], email: current_user[:email]}.to_json,
      headers: {
        'Content-Type' => 'application/json',
        'charset' => 'utf-8'
      }
    }).parsed_response

    #p response_forum
    render json: {token: current_user[:token], user_id: current_user[:user_id]}
  end

  def profile
    user = HTTParty.get(ENV["USER_URL"] + "/user/profile", {
      :query => {user_id: @current_user[:user_id]},
      headers: {
        'Content-Type' => 'application/json',
        'charset' => 'utf-8'
      }
    }).parsed_response.transform_keys(&:to_sym)

    p user[:user_id]

    render json: {token: user[:token], data: {user_id: user[:user_id], name: user[:name], email: user[:email]}}
  end
end
