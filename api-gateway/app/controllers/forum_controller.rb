class ForumController < ApplicationController
  require 'net/http'
  before_action :authenticate_user

  #access user id with this! @current_user[:user_id]
  
  def forward
    response = forward_request(ENV["FORUM_URL"], request, @current_user[:user_id])
    p response.body
    if response.body == nil
      render json: {}, status: response.code
    else
    json_response = JSON.parse(response.body)
    render json: json_response, status: response.code
    end
  end

  private

  
  def forward_request(url, request, user_id)
    full_path = request.original_fullpath + "?user_id=#{user_id}"
  
    uri = URI.join(url, full_path)
  
    req = Net::HTTP.const_get(request.method.capitalize).new(uri)
    req.body = request.body.read if request.body
    req.content_type = request.content_type if request.content_type
  
    response = Net::HTTP.start(uri.host, uri.port) do |http|
      http.request(req)
    end
  
    response
  end
  

  # def forward_request(url, request, user_id)
  #   full_path = request.fullpath + "?user_id=#{user_id}"
  #   req = Net::HTTP.const_get(request.method.capitalize).new(full_path)
  #   req.body = request.body.read
  #   req.content_type = request.content_type
  #   req
  #   uri = URI(url)
  #   Net::HTTP.start(uri.host, uri.port) do |http|
  #     http.request(req)
  #   end
  # end
end