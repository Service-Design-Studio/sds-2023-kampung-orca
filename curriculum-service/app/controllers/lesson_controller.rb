class LessonController < ApplicationController
  before_action :set_lesson, only: %i[show destroy]
  def index
    lessons = Lesson.all
    render json: lessons
  end

  def create
    # TODO: Use uuid or other id generators
    id = rand(0...99_999).to_s
    check = Lesson.where(topic_id: id)
    while check.length != 0
      id = rand(0...99_999).to_s
      check = Lesson.where(topic_id: id)
    end
    lesson = Lesson.create!(lesson_id: id, topic_id: params[:topic_id], order_index: params[:order_index],
                            title: params[:title])

    if lesson
      render json: lesson
    else
      render json: lesson.errors
    end
  end

  def show
    render json: @lesson
  end



  def show_lessons
    user = User.find(params[:user_id])
    print(params)
    lessons = Lesson.where(topic_id: params[:topic_id]).order(order_index: :asc)
    lessons_access = lessons.where(lesson_id: user[:lessons_access]).order(order_index: :asc)
    render json: { lessons: lessons, lessons_access: lessons_access,  topic_id: params[:topic_id]}
  end

  def destroy
    Lesson&.destroy(params[:id])
    render json: { message: 'Lesson deleted!' }
  end

  def lesson_completed
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
    if !user.exercises_access.include?(this_exercise.exercise_id) && this_exercise
      user.exercises_access << this_exercise.exercise_id
    end
    user.save

    response = {
      next_lesson: next_lesson&.id,
      pre_lesson: pre_lesson&.id,
      this_exercise: this_exercise&.id,
      topic: topic_id
    }
    render json: response
  end
  private

  def lesson_params
    params.permit(:lesson_id, :topic_id, :order_index, :title, :id)
  end

  def set_lesson
    @lesson = Lesson.find(params[:lesson_id])
  end
end
