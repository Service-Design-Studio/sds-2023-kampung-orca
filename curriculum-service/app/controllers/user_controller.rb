class UserController < ApplicationController
  require 'json'

  def create
    first_lessons_of_topic = Lesson.where(order_index: 0).to_a
    lessons_array = []
    first_lessons_of_topic.each do |lesson|
      lessons_array << lesson.lesson_id
    end
    begin
      user = User.create!(user_id: params[:user_id], lessons_access: lessons_array, exercises_access: [])
    rescue
    end
    head 202
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end
end
