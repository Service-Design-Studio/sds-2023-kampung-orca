# spec/models/post_spec.rb
require 'rails_helper'

RSpec.describe Post, type: :model do
  describe 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:lesson) }
    it { is_expected.to have_many(:comments).dependent(:destroy) }
  end

  describe 'validations' do
    it 'is not valid without content' do
      post = Post.new
      expect(post).not_to be_valid
    end

    it 'is valid with content' do
      post = Post.new(content: 'This is a post.')
      expect(post).to be_valid
    end
  end

  describe 'dependent destroy' do
    it 'destroys associated comments when post is destroyed' do
      user = User.create(name: 'user1')
      lesson = Lesson.create(title: 'Introduction')
      post = Post.create(content: 'This is a post.', user: user, lesson: lesson)
      comment1 = post.comments.create(content: 'Comment 1', user: user)
      comment2 = post.comments.create(content: 'Comment 2', user: user)

      expect { post.destroy }.to change { Comment.count }.by(-2)
    end
  end
end

