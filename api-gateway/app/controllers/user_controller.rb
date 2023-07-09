class UserController < ApplicationController

  def authorization_code_exchange
    current_user = HTTParty.post("http://localhost:3004/user/authorization_code_exchange", {
      :body => {code: @code}.to_json,
      headers: {
        'Content-Type' => 'application/json',
        'charset' => 'utf-8'
      }
    }).parsed_response.transform_keys(&:to_sym)

    response_curriculum = HTTParty.post(ENV["CURRICULUM_URL"] + "/api/v1/user/create", {
      body: {user_id: current_user[:user_id]}.to_json,
      headers: {
        'Content-Type' => 'application/json',
        'charset' => 'utf-8'
      }
    })
    p "Status Code: #{response_curriculum.code}, Status Message: #{response_curriculum.message}"

    
    # response_forum = HTTParty.post(ENV["FORUM_URL"] + "/user/create", {
    #   body: {user_id: current_user[:user_id]}.to_json,
    #   headers: {
    #     'Content-Type' => 'application/json',
    #     'charset' => 'utf-8'
    #   }
    # }).parsed_response


    #p response_forum
    render json: {token: current_user[:token]}
  end
end
