class CurriculumController < ApplicationController
  before_action :authenticate_user

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
