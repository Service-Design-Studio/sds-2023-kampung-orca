require 'rails_helper'

RSpec.describe Comment, type: :model do

  describe 'validations' do
    before do
      @lesson = Lesson.create(title: 'Introduction')
      @user = User.create(name: 'user1',email: 'user1@gmail.com',user_id: '1')
      @post = Post.create(title: 'This is a post.', content: 'This is a post content.', user_id: @user.user_id , lesson_id: @lesson.id)
    end

    it 'is valid with valid attributes' do
      @comment = Comment.create(content: 'This is a comment.', post_id: @post.id, user_id: @user.user_id)
      expect(@comment).to be_valid
    end

    it 'is not valid without a content' do
      @comment = Comment.create(content: '', post_id: @post.id)
      expect(@comment).not_to be_valid
    end

  end
end

