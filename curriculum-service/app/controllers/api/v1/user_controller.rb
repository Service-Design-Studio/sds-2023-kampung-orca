class Api::V1::UserController < ApplicationController
  require 'json'


  def create

    first_lessons_of_topic = Lesson.where(order_index: 0).to_a
    lessons_array = []
    first_lessons_of_topic.each do |lesson|
      lessons_array << lesson.lesson_id
    end
    user = User.create!(user_id: params[:user_id], lessons_access: lessons_array, exercises_access:[])
    if user
      head 202
    else
      render json: user.errors
    end
  end

  def open_next_lesson
    current_lesson = Lesson.find(params[:lesson_id])
    topic_id = current_lesson.topic_id
  
    next_lesson = Lesson.find_by(topic_id: topic_id, order_index: current_lesson.order_index + 1)
    pre_lesson = Lesson.find_by(topic_id: topic_id, order_index: current_lesson.order_index - 1)
    user = User.find(params[:user_id])
    if next_lesson != nil
      unless user.lessons_access.include?(next_lesson.lesson_id)
        user.lessons_access << next_lesson.lesson_id if next_lesson
      end
    end
    
    this_exercise = Exercise.find_by(params[current_lesson.lesson_id]) if current_lesson
    unless user.exercises_access.include?(this_exercise.exercise_id)
      user.exercises_access << this_exercise.exercise_id if this_exercise
    end
    user.save

  
    response = {
      next_lesson: next_lesson&.id,
      pre_lesson: pre_lesson&.id,
      this_exercise: this_exercise&.id
    }
    
    render json: response
  end

  def open_next_exercise
    
  end


  private
  def set_user
    @user = User.find(params[:user_id])
  end

end
