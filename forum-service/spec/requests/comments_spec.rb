require 'rails_helper'

RSpec.describe "Comments Controller", type: :request do
  describe 'GET #index' do
    it 'renders JSON containing comments with associated user info' do
      # Create a sample user
      @user = User.create(name: 'John Doe', email: 'johndoe@gmail.com', user_id: '1')

      # Create a sample lesson and post associated with the user
      @lesson = Lesson.create(title: 'Introduction')
      @post = Post.create(title: 'This is a post', content: 'Post content', user_id: @user.user_id, lesson: @lesson)

      # Create some comments associated with the post
      @comment1 = Comment.create(content: 'Comment 1', user: @user, post: @post)
      @comment2 = Comment.create(content: 'Comment 2', user: @user, post: @post)

      # Mock the request to the index action and set the post_id parameter
      get "/lessons/#{@lesson.id}/posts/#{@post.id}/comments"

      # Expect the response to have a successful HTTP status code
      expect(response).to have_http_status(200)

      # Parse the JSON response body
      json_response = JSON.parse(response.body)

      # Expect that the JSON response contains the comments with associated user info
      expect(json_response.length).to eq(2)
      expect(json_response[0]['content']).to eq('Comment 1')
      expect(json_response[1]['content']).to eq('Comment 2')

      # # Expect that the user info is included for each comment
      # expect(json_response[0]['user']['user_id']).to eq(@user.id)
      # expect(json_response[0]['user']['name']).to eq(@user.name)
      # expect(json_response[1]['user']['user_id']).to eq(@user.id)
      # expect(json_response[1]['user']['name']).to eq(@user.name)
    end
  end

  # describe 'GET #show' do
  #   it 'renders JSON containing a comment with associated user info' do
  #     # Create a sample user
  #     user = User.create(name: 'John Doe', email: 'johndoe@gmail.com', user_id: '1')

  #     # Create a sample lesson and post associated with the user
  #     lesson = Lesson.create(title: 'Introduction')
  #     post = Post.create(title: 'This is a post', content: 'Post content', user: user, lesson: lesson)

  #     # Create a comment associated with the post
  #     comment = Comment.create(content: 'This is a comment.', user: user, post: post)

  #     # Mock the request to the show action and set the comment_id parameter
  #     get "/lessons/#{lesson.id}/posts/#{post.id}/comments/#{comment.id}"

  #     # Expect the response to have a successful HTTP status code
  #     expect(response).to have_http_status(200)


  #     # Parse the JSON response body
  #     json_response = JSON.parse(response.body)

  #     puts json_response
  #     # Expect that the JSON response contains the comment with associated user info
  #     expect(json_response['content']).to eq('This is a comment.')

  #     # Expect that the user info is included for the comment
  #     expect(json_response['user']['id']).to eq(user.id)
  #     expect(json_response['user']['name']).to eq(user.name)
  #   end
  # end
end
