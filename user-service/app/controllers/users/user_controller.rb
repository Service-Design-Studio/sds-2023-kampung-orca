# iss: The issuer claim indicates the issuer of the ID token, which is always https://accounts.google.com for Google Sign-In.
# nbf: The not-before claim is a timestamp indicating the time before which the ID token should not be accepted for processing.
# aud: The audience claim identifies the intended audience for the ID token, which should match your Google client ID.
# sub: The subject claim contains a unique identifier for the user.
# email: The email claim holds the user's email address.
# email_verified: The email_verified claim indicates whether the user's email address has been verified.
# azp: The authorized party claim contains the client ID of the authorized party making the request, which should match your Google client ID.
# name: The name claim provides the user's full name.
# picture: The picture claim holds the URL to the user's profile picture.
# given_name: The given_name claim represents the user's first name.
# family_name: The family_name claim represents the user's last name.
# iat: The issued at claim indicates the timestamp when the ID token was issued.
# exp: The expiration time claim defines the timestamp after which the ID token should no longer be accepted for processing.
# jti: The JWT ID claim provides a unique identifier for the JWT.

require 'net/http'
require 'json'
require 'googleauth'

class Users::UserController < ApplicationController
  
    before_action :set_credentials
    #skip_before_action :verify_authenticity_token, only: [:google]
    
    def google
      render json: {}
    end
  
    def authorization_code_exchange
      begin
        query = {
          code: @code,
          client_id: ENV['GOOGLE_CLIENT_ID'],
          client_secret: ENV['GOOGLE_CLIENT_SECRET'],
          redirect_uri: ENV['FRONTEND_URL'] + '/oauth/google',
          grant_type: 'authorization_code'
        }
        response = HTTParty.post('https://www.googleapis.com/oauth2/v4/token', query: query)
        p "Exchanged Tokens: #{response}"
        tokens_data =  {token: response['access_token'], refresh_token: response['refresh_token'], expires_at: response["expires_in"]}
        @token = response['access_token']
        headers = {
          'Content-Type': 'application/json',
          'Authorization': "Bearer #{response['access_token']}"
        }

        # Get user profile information
        profile_response = HTTParty.get(
          'https://www.googleapis.com/oauth2/v2/userinfo',
          headers: headers
        )
        profile_data = JSON.parse(profile_response.body)
        p "Exchanged profile: #{profile_data}"

        if profile_data["id"] == nil
          head 400
        end
  
        if User.where(user_id: profile_data["id"]).blank? == true
          first_time_setup_google(tokens_data, profile_data)
        else
          Token.create!(token:tokens_data[:token], refresh_token:tokens_data[:refresh_token], expires_at: Time.now + tokens_data[:expires_at].to_i.seconds, user_id: profile_data["id"])
        end
        
        render json: {token: @token, user_id: profile_data["id"]}
      rescue Exception
        render json: {token: nil, user_id: nil}
      end


      #if profile_data[:id] not in database
        #first_time_setup()
      #end

      
    end


    def verify_token
      token = Token.find_by(token: @token)
      if token == nil
        render json: {token: nil, user_id: nil}
      else
        if token.expires_at < Time.now
          token[:token] = token.refresh!
        end
        render json: {token: token[:token], user_id: token[:user_id]}
      end
    end

  private

  def first_time_setup_google(tokens_data, profile_data)
    Token.create!(token: tokens_data[:token], refresh_token: tokens_data[:refresh_token],
                  expires_at: Time.now + tokens_data[:expires_at].to_i.seconds, user_id: profile_data['id'])
    User.create!(user_id: profile_data['id'], email: profile_data['email'], name: profile_data['name'])
  end

  def set_credentials
    @token = params[:token]
    @code = params[:code]
  end
end
