class LessonController < ApplicationController
  before_action :set_lesson, only: %i[show destroy]
  def index
    lesson = Lesson.all
    puts lesson.to_json
    render json: lesson
  end

  def create
    # TODO: Use uuid or other id generators
    id = rand(0...99_999)
    check = Lesson.find(id)
    while check.length != 0
      id = rand(0...99_999)
      check = Lesson.find(id)
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

  def lesson_list
    user = User.find(params[:user_id])
    lessons = Lesson.where(topic_id: params[:topic_id]).order(order_index: :asc)
    lessons_access = lessons.where(lesson_id: user[:lessons_access]).order(order_index: :asc)
    render json: { lessons: lessons, lessons_access: lessons_access }
  end

  def destroy
    Lesson&.destroy(params[:lesson_id])
    render json: { message: 'Lesson deleted!' }
  end

  private

  def lesson_params
    params.permit(:lesson_id, :topic_id, :order_index, :title)
  end

  def set_lesson
    @lesson = Lesson.find(params[:lesson_id])
  end
end
