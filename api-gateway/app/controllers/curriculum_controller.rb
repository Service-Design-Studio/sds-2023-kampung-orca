class CurriculumController < ApplicationController
  before_action :authenticate_user

  # TODO: /curriculum should NOT be forwarding requests
  # Instead, when lessons are created for e.g
  # It needs to update all services that use it i.e FORUM!!

  # TODO: Needs a rewrite
  def forward_request
    modified_api = request.path.sub('/curriculum', '')
    p modified_api
    url = ENV["CURRICULUM_URL"] + modified_api # Replace with the URL of your backend
    case request.method.capitalize
    when "Get"
      data = HTTParty.get(url, {
        :body => {user_id: @current_user[:user_id]}.to_json,
        headers: {
          'Content-Type' => 'application/json',
          'charset' => 'utf-8'
        }
      }).parsed_response

    when "Post"
      data = HTTParty.post(url, {
        :body => {user_id: @current_user[:user_id]}.to_json,
        headers: {
          'Content-Type' => 'application/json',
          'charset' => 'utf-8'
        }
      }).parsed_response
    end
    p data
    render json: {token: @current_user[:token], data:data}
  end 
end
