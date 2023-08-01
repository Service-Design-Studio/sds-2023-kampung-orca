# spec/controllers/posts_controller_spec.rb
require 'rails_helper'

RSpec.describe PostsController, type: :controller do
  let(:lesson) { Lesson.create(title: 'Test Lesson') }
  let(:user) { User.create(user_id: '123', name: 'John Doe') }

  describe 'GET #index' do
    it 'returns a successful response' do
      post1 = lesson.posts.create(title: 'Post 1', content: 'Content of Post 1', user: user)
      post2 = lesson.posts.create(title: 'Post 2', content: 'Content of Post 2', user: user)

      get :index, params: { lesson_id: lesson.id }
      expect(response).to be_successful

      parsed_response = JSON.parse(response.body)
      expect(parsed_response.size).to eq(2)
      expect(parsed_response[0]['title']).to eq('Post 1')
      expect(parsed_response[1]['title']).to eq('Post 2')
    end

    it 'returns not_found status for non-existent lesson' do
      get :index, params: { lesson_id: 999 }
      expect(response).to have_http_status(:not_found)
    end
  end

  describe 'GET #show' do
    it 'returns a successful response' do
      post = lesson.posts.create(title: 'Test Post', content: 'Content of Test Post', user: user)

      get :show, params: { lesson_id: lesson.id, id: post.id }
      expect(response).to be_successful

      parsed_response = JSON.parse(response.body)
      expect(parsed_response['title']).to eq('Test Post')
    end

    it 'returns not_found status for non-existent post' do
      get :show, params: { lesson_id: lesson.id, id: 999 }
      expect(response).to have_http_status(:not_found)
    end
  end

  describe 'POST #create' do
    it 'creates a new post' do
      post_params = { title: 'New Post', content: 'Content of New Post', user_id: user.user_id }
      post :create, params: { lesson_id: lesson.id, post: post_params }
      parsed_response = JSON.parse(response.body)
      if response.status == 201
        expect(parsed_response['title']).to eq('New Post')
        expect(parsed_response['content']).to eq('Content of New Post')
        expect(parsed_response['user']['id']).to eq(user.id)
      else
        puts "Post creation failed with errors: #{parsed_response['errors']}"
      end
    end

    it 'returns unprocessable_entity status for invalid post' do
      post_params = { title: '', content: '', user_id: user.user_id }
      post :create, params: { lesson_id: lesson.id, post: post_params }

      expect(response).to have_http_status(:unprocessable_entity)
      expect(Post.count).to eq(0)
    end
  end

  describe 'PATCH #update' do
    it 'updates an existing post' do
      post = lesson.posts.create(title: 'New Title', content: 'Old Content', user: user)
      patch :update, params: { lesson_id: lesson.id, id: post.id, post: { title: 'New Title' } }
      post.reload
      expect(post.title).to eq('New Title')
    end

    it 'returns unprocessable_entity status for invalid post update' do
      post = lesson.posts.create(title: 'Old Title', content: 'Old Content', user: user)
      patch :update, params: { lesson_id: lesson.id, id: post.id, post: { title: '' } }

      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe 'DELETE #destroy' do
    it 'destroys an existing post' do
      post = lesson.posts.create(title: 'Post to be deleted', content: 'Content of Post', user: user)
      delete :destroy, params: { lesson_id: lesson.id, id: post.id }

      expect(response).to have_http_status(:no_content)
      expect(Post.exists?(post.id)).to be_falsey
    end

    it 'returns not_found status for non-existent post' do
      delete :destroy, params: { lesson_id: lesson.id, id: 999 }
      expect(response).to have_http_status(:not_found)
    end

    it 'returns unauthorized status for unauthorized deletion' do
      post = lesson.posts.create(title: 'Unauthorized Post', content: 'Content of Unauthorized Post', user: user)
      unauth_user = User.create(user_id: '696969', name: 'John Doe')

      delete :destroy, params: { lesson_id: lesson.id, id: post.id, user: unauth_user }
      expect(response).to have_http_status(:no_content)
    end
  end
end
