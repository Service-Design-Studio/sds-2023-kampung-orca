class UserController < ApplicationController

  def authorization_code_exchange
    current_user = HTTParty.post("http://localhost:3004/user/authorization_code_exchange", {
      :body => {code: @code}.to_json,
      headers: {
        'Content-Type' => 'application/json',
        'charset' => 'utf-8'
      }
    }).parsed_response
    render json: {token: current_user["token"]}
  end
end
