class Api::V1::LessonController < ApplicationController
  before_action :set_lesson, only: %i[show destroy]
  def index
    lesson = Lesson.all
    puts lesson.to_json
    render json: lesson
  end

  def create
    id = rand(0...99999)
    check = Lesson.find(id)
    while check.length != 0
      id = rand(0...99999)
      check = Lesson.find(id)
    end
    lesson = Lesson.create!(lesson_id: id, topic_id: params[:topic_id], order_index: params[:order_index], title: params[:title])

    if lesson
      render json: lesson
    else
      render json: lesson.errors
    end
  end

  def show
    render json: @lesson
  end

  def lessonlist
    p params[:id]
    lesson = Lesson.new 
    lessons = lesson.get_lessons_by_topic(params[:id])
    render json: lessons
  end

  def destroy
    Lesson&.destroy(params[:id])
    render json: { message: 'Lesson deleted!' }
  end

  def next_lesson
    lesson = Lesson.where(lesson_id: params[:topic_id], order_index: params[:order_index] + 1)
    render json: lesson
  end
  private
  def lesson_params
    params.permit(:lesson_id, :topic_id, :order_index, :title)
  end

  def set_lesson
    @lesson = Lesson.find(params[:id])
  end

end
