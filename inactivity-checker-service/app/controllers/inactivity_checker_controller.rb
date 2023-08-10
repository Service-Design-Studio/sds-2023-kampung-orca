class InactivityCheckerController < ApplicationController
  skip_before_action :authenticate_user, raise: false
  after_action :run_inactivity_check, only: :check_inactivity

  def fetch_posts_and_comments(lesson_id)
    puts lesson_id
    url = "#{ENV['GATEWAY_URL']}/lessons/#{lesson_id}/posts"

    # puts url

    uri = URI.parse(url)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true if uri.scheme == 'https'
    uri.query = URI.encode_www_form({ 'token' => ENV['ML_TOKEN'] })

    request = Net::HTTP::Get.new(uri, initheader = { 'Content-Type' => 'application/json', 'charset' => 'utf-8' })
    response = http.request(request)

    posts_data = JSON.parse(response.body)

    posts_data.map do |post|
      p post
      post_id = post['id']
      comments_uri = URI("#{ENV['GATEWAY_URL']}/lessons/#{lesson_id}/posts/#{post_id}/comments")
      comments_uri.query = URI.encode_www_form({ 'token' => ENV['ML_TOKEN'] })
      comments_response = Net::HTTP.get(comments_uri)
      comments_data = JSON.parse(comments_response)

      # Store comments as an array directly in the post data
      post['comments'] = comments_data

      post
    end

    # p posts_data
  end

  def check_for_inactivity_and_format_prompts(lesson_id)
    # puts "Checking inactivity for lesson ID: #{lesson_id}"
    posts_data = fetch_posts_and_comments(lesson_id)

    posts = posts_data

    inactive_posts_prompts = posts.select do |post|
      # puts post["comments"]

      no_comments = post['comments'].blank?

      post_created_at = Time.parse(post['created_at'])

      days_since_creation = (Time.now - post_created_at) / (60 * 60 * 24)

      last_comment_time = post['comments']&.last ? Time.parse(post['comments'].last['created_at']) : nil
      days_since_last_comment = last_comment_time ? (Time.now - last_comment_time) / (60 * 60 * 24) : nil

      most_recent_comment = post['comments'].max_by { |comment| comment['created_at'] }
      # puts most_recent_comment
      user_id_of_most_recent_comment = most_recent_comment['user_id'] unless most_recent_comment.nil?

      inactive = (no_comments && days_since_creation > 3) || (days_since_last_comment.to_i > 3 && user_id_of_most_recent_comment != 'admin')

      puts "Post ID: #{post['id'] || 'N/A'}, Inactive: #{inactive}, Days Since Creation: #{days_since_creation}, Days Since Last Comment: #{days_since_last_comment}, User Of Last Comment: #{user_id_of_most_recent_comment}"

      inactive
    end

    prompts = inactive_posts_prompts.map do |post|
      {
        "post_id": post['id'],
        "prompt_text": "#{post['title']} - #{post['user']['name']}\n#{post['content']}\n#{post['comments']&.map do |comment|
                                                                                            comment['content']
                                                                                          end&.join("\n") || ''}"
      }
    end

    ml_url = URI("#{ENV['GATEWAY_URL']}/ml/generate-comment")
    http = Net::HTTP.new(ml_url.host, ml_url.port)
    http.use_ssl = true if ml_url.scheme == 'https'
    request = Net::HTTP::Post.new(ml_url)
    request['Content-Type'] = 'application/json'
    request.body = { prompts: }.to_json

    # Make the request and get the response from the Flask app
    response = http.request(request)

    # puts response

    generated_responses_data = JSON.parse(response.body)
    generated_responses = generated_responses_data['generated_responses']

    # puts "Prompts and Responses: #{generated_responses_data}"

    prompts_and_responses = prompts.zip(generated_responses).map do |_prompt, response|
      {
        post_id: response['post_id'], # Extract post_id from response_content
        response_content: response['response'] # Extract response from response_content,  # Extract the post_id from the prompt
      }
    end

    # puts "Prompts and Responses: #{prompts_and_responses}"

    prompts_and_responses.each do |data|
      post_id = data[:post_id]
      response_content = data[:response_content]

      puts "Post ID: #{post_id}, Response Content: #{response_content}"

      api_gateway_uri = URI("#{ENV['GATEWAY_URL']}/lessons/#{lesson_id}/posts/#{post_id}/comments")
      http = Net::HTTP.new(api_gateway_uri.host, api_gateway_uri.port)
      http.use_ssl = true if api_gateway_uri.scheme == 'https'
      api_gateway_uri.query = URI.encode_www_form({ 'token' => ENV['ML_TOKEN'], 'user_id' => 'admin' })

      request = Net::HTTP::Post.new(api_gateway_uri)
      request['Content-Type'] = 'application/json'
      request.body = { comment: { content: response_content } }.to_json

      # Send the request to create the comment
      response = http.request(request)
    end

    # p "yay"

    # render json: { prompts_and_responses: generated_responses_data }
  end

  def check_inactivity(lesson_id, interval_seconds)
    loop do
      check_for_inactivity_and_format_prompts(lesson_id)
      sleep(interval_seconds)
    end
  end

  def run_inactivity_check
    url = "#{ENV['GATEWAY_URL']}/lessons?token=#{ENV['ML_TOKEN']}"
    uri = URI.parse(url)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true if uri.scheme == 'https'
    request = Net::HTTP::Get.new(uri)
    request['Content-Type'] = 'application/json'
    request['charset'] = 'utf-8'

    response = http.request(request)

    lessons_array = JSON.parse(response.body)

    lesson_ids = lessons_array.map { |lesson| lesson['lesson_id'] }

    puts "Lesson Ids: #{lesson_ids}"
    puts "Class of lesson_ids: #{lesson_ids.class}"

    # text-bison can only process up to 60 requests a minute by default T_T
    interval_seconds = 61 # params[:interval_seconds].to_i || 90

    # render json: {message: "Inactivity checker started with interval of #{interval_seconds} seconds."}

    lesson_ids.each do |lesson_id|
      # puts "IIIIIIIIIIIIIIIIIIIIIIIIIIDDDDDDDDDDDDDDDDDDDDDDDDD: #{lesson_id}"
      puts "Checking inactivity for lesson ID: #{lesson_id}"
      # check_inactivity(lesson_id, interval_seconds)
      Thread.new { check_inactivity(lesson_id, interval_seconds) }
      puts "Finished checking inactivity for lesson ID: #{lesson_id}\n\n"
    end
  end
end
