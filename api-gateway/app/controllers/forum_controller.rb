class ForumController < ApplicationController
  require 'net/http'

  def forward
      response = forward_request('http://localhost:3002', request)
      render json: response.body, status: response.code
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