class UserController < ApplicationController

  # TODO: Needs a rewrite

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
    p "Status Code: #{current_user}"
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
