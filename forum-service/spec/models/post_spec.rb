require 'rails_helper'

RSpec.describe Post, type: :model do
  before(:each) do 
    Lesson.destroy_all
    User.destroy_all
    @user = User.create(id: 9, name: 'Qazer', email: 'hi') 
    @lesson = Lesson.create(id: 9, title: 'Introduction') 
  end

  describe 'validations' do
    it 'is not valid without title' do
      post = Post.new(user_id: 9, lesson_id: 9, content: 'This is a post.')
      expect(post).not_to be_valid
    end

    it 'is not valid without associated lesson' do
      post = Post.new(user_id: 9, title:'hello', content: 'This is a post.')
      expect(post).not_to be_valid
    end

    it 'is not valid without associated user' do
      post = Post.new(lesson_id: 9, title:'hello', content: 'This is a post.')
      expect(post).not_to be_valid
    end

    it 'is valid with title, content, associated lesson and associated user' do
      post = Post.new(user_id: 9, lesson_id: 9, title:'hello', content: 'This is a post.')
      expect(post).to be_valid
    end
  end


  describe 'dependent destroy' do
    it 'destroys associated comments when post is destroyed' do
      post = Post.create(title: 'Title', content: 'This is a post.', user: @user, lesson: @lesson)
      comment1 = post.comments.create(content: 'Comment 1', user: @user)
      comment2 = post.comments.create(content: 'Comment 2', user: @user)

      expect { post.destroy }.to change { Comment.count }.by(-2)
    end
  end
  
end
