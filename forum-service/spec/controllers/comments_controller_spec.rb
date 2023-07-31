require 'rails_helper'

RSpec.describe CommentsController, type: :controller do
  let(:user) { User.create(user_id: 'user123', name: 'John Doe') }
  let(:admin_user) { User.create(user_id: 'admin', name: 'Admin User') }
  let(:lesson) { Lesson.create(title: 'Introduction') }
  let(:test_post) { Post.create(title: 'New Post', content: 'Content of New Post', user: user, lesson: lesson) }

  describe 'POST #create' do
    context 'with valid parameters' do
      it 'creates a new comment' do
        comment_params = { content: 'This is a comment.',post_id: test_post.id, user_id: user.user_id }
        expect {Comment.create([comment_params])
        }.to change { Comment.count }.by(1)
        expect(response).to have_http_status(:ok)
        expect(Comment.last.content).to eq('This is a comment.')
        expect(Comment.last.user).to eq(user)
        expect(Comment.last.post).to eq(test_post)
      end
    end

    context 'with invalid parameters' do
      it 'returns an error if content is blank' do
        comment_params = { content: '', user_id: user.user_id }
        post :create, params: { lesson_id: test_post.lesson_id, post_id: test_post.id, comment: comment_params }
        expect(response).to have_http_status(:unprocessable_entity)
        expect(JSON.parse(response.body)).to eq({ 'error' => 'Content fields cannot be empty' })
      end
    end
  end

  describe 'PATCH #update' do
    let!(:comment) { Comment.create(content: 'Updated content', user:user, post: test_post) }
    context 'with valid parameters' do
      it 'updates the comment content' do
        comment_params = { content: 'Updated content', user_id:user.user_id }
        patch :update, params: { lesson_id: test_post.lesson_id, post_id: test_post.id, id: comment.id, comment: comment_params}
        expect(comment.reload.content).to eq('Updated content')
      end
    end

    context 'with invalid parameters' do
      it 'returns an error if content is blank' do
        comment_params = { content: '', user_id: user.user_id }
        patch :update, params: { lesson_id: test_post.lesson_id, post_id: test_post.id, id: comment.id, comment: comment_params}
        expect(response).to have_http_status(:unauthorized)
      end

      it 'returns an error if user is not authorized to perform the action' do
        comment_params = { content: 'Updated content', user_id: 'non_existent_user' }
        patch :update, params: { lesson_id: test_post.lesson_id, post_id: test_post.id, id: comment.id, comment: comment_params}
        expect(response).to have_http_status(:unauthorized)
        expect(JSON.parse(response.body)).to eq({ 'error' => 'You are not authorized to perform this action' })
      end
    end
  end

  describe 'DELETE #destroy' do
  let!(:comment) { Comment.create(content: 'Test content', user: user, post: test_post) }
    context 'with valid parameters' do
      it 'deletes the comment' do
        delete :destroy, params: { lesson_id: test_post.lesson_id, post_id: test_post.id, id: comment.id }
        expect(response).to have_http_status(:no_content)
        expect(Comment.exists?(comment.id)).to be_falsey
      end
    end

    context 'with invalid parameters' do
      it 'returns an error if user is not authorized to perform the action' do
        delete :destroy, params: { lesson_id: test_post.lesson_id, post_id: test_post.id, id: comment.id, user_id: 'non_existent_user' }
        expect(response).to have_http_status(:no_content)
      end
    end
  end


  describe 'GET #index' do
    let!(:comment1) { Comment.create(content: 'Comment 1', user: user, post: test_post) }
    let!(:comment2) { Comment.create(content: 'Comment 2', user: user, post: test_post) }

    it 'returns all comments for the specified post' do
      get :index, params: { lesson_id: lesson.id, post_id: test_post.id }
      expect(response).to have_http_status(:ok)
      comments = JSON.parse(response.body)
      expect(comments.size).to eq(2)
      expect(comments.first['content']).to eq('Comment 1')
      expect(comments.last['content']).to eq('Comment 2')
    end
  end

  describe 'GET #show' do
    let!(:comment) { Comment.create(content: 'Test content', user: user, post: test_post) }

    it 'returns the specified comment' do
      get :show, params: { lesson_id: lesson.id, post_id: test_post.id, id: comment.id }
      expect(response).to have_http_status(:ok)
      comment_data = JSON.parse(response.body)
    end

    it 'returns an error if comment is not found' do
      get :show, params: { lesson_id: lesson.id, post_id: test_post.id, id: 'nonexistent' }
      expect(response).to have_http_status(:not_found)
      expect(JSON.parse(response.body)).to eq({ 'error' => 'Comment not found' })
    end
  end
end
