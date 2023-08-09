class MlController < ApplicationController
  def forward
    response = forward_request(ENV['ML_URL'], request)
    p 'Forwarding body: ' + response.body
    if response.body.nil?
      render json: {}, status: response.code
    else
      json_response = JSON.parse(response.body)
      render json: json_response, status: response.code
    end
  end

  private

  def forward_request(url, request)
    full_path = request.original_fullpath

    uri = URI.join(url, full_path)
    p 'Forward path: ' + uri.to_s

    req = Net::HTTP.const_get(request.method.capitalize).new(uri)
    req.body = request.body.read if request.body
    req.content_type = request.content_type if request.content_type
    Net::HTTP.start(uri.host, uri.port, use_ssl: uri.scheme == 'https') do |http|
      http.request(req)
    end
  end
end
