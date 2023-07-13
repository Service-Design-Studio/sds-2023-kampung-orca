class CurriculumController < ApplicationController
  before_action :authenticate_user

  # TODO: /curriculum should NOT be forwarding requests
  # Instead, when lessons are created for e.g
  # It needs to update all services that use it i.e FORUM!!

  # TODO: Needs a rewrite
  def forward_request
    modified_api = request.path.sub('/curriculum', '/')
    url = ENV["CURRICULUM_URL"] + modified_api # Replace with the URL of your backend
  
    #response = HTTParty.post(url, body: request.raw_post, headers: request.headers)
  
    # Handle the response from the backend if needed
    # ...
    
    data = HTTParty.get(url, {
      :body => {user_id: @current_user[:user_id]}.to_json,
      headers: {
        'Content-Type' => 'application/json',
        'charset' => 'utf-8'
      }
    }).parsed_response
    render json: {token: @current_user[:token], data:data}
  end
end
