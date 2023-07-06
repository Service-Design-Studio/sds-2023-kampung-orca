class ForumController < ApplicationController
  require 'net/http'
  before_action :authenticate_user

  def testing
    render json: @current_user
  end
  def forward
      response = forward_request('http://localhost:3003', request) # just for testing, request should be dynamically generated
      json_response = JSON.parse(response.body)
      render json: json_response, status: response.code
  end

  private

  def forward_request(url, request)
      uri = URI("#{url}#{request.fullpath}")
      req = Net::HTTP::Get.new(uri.request_uri)
      Net::HTTP.start(uri.host, uri.port) do |http|
          http.request(req)
      end
  end
end