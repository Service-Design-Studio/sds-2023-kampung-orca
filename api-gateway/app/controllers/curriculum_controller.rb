class CurriculumController < ApplicationController
  before_action :authenticate_user

  # TODO: /curriculum should NOT be forwarding requests
  # Instead, when lessons are created for e.g
  # It needs to update all services that use it i.e FORUM!!

  # TODO: Needs a rewrite
  def forward_request
    modified_api = request.path.sub('/curriculum', '')
    p 'New URL: ' + modified_api
    url = ENV['CURRICULUM_URL'] + modified_api # Replace with the URL of your backend
    p 'Current user: ' + @current_user.to_json

    lesson_id = params[:lesson_id]
    user_answer = params[:user_answer]

    case request.method.capitalize

    when 'Get'
      data = HTTParty.get(url, {
                            query: { user_id: @current_user[:user_id] }
                          }).parsed_response

    when 'Post'
      request_body = {
        user_id: @current_user[:user_id],
        lesson_id:,
        user_answer:
      }.to_json

      data = HTTParty.post(url, {
                             body: request_body,
                             headers: {
                               'Content-Type' => 'application/json',
                               'charset' => 'utf-8'
                             }
                           }).parsed_response
    end
    p 'Data received: ' + request.method.capitalize + ' ' + url + ' ' + data.to_json
    render json: { token: @current_user[:token], data: }
  end
end
