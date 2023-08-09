require 'net/http'
class ForumController < ApplicationController
  before_action :authenticate_user

  #access user id with this! @current_user[:user_id]

  # TODO: Needs a rewrite

  def testing
    render json: @current_user
  end
  
  def forward
    response = forward_request(ENV["FORUM_URL"], request, @current_user[:user_id])
    p "Forwarding body: " + response.body.to_s
    if response.body == nil
      render json: {}, status: response.code
    else
    json_response = JSON.parse(response.body)
    render json: json_response, status: response.code
    end
  end

  private

  def forward_request(url, request, user_id)
    full_path = request.original_fullpath
  
    uri = URI.join(url, full_path)
    uri.query = URI.encode_www_form({"user_id" => user_id})
    p "Forward path: " + uri.to_s
  
    req = Net::HTTP.const_get(request.method.capitalize).new(uri)
    req.body = request.body.read if request.body
    req.content_type = request.content_type if request.content_type
    # req.add_field("user_id", user_id)
    response = Net::HTTP.start(uri.host, uri.port, use_ssl: uri.scheme == 'https') do |http|
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