class Api::V1::LessonController < ApplicationController
  before_action :set_lesson, only: %i[show destroy]
  def index
    lesson = LessonContent.all
    puts lesson.to_json
    render json: lesson
  end

  def create
    id = rand(0...99999)
    check = LessonList.find(id)
    while check.length != 0
      id = rand(0...99999)
      check = LessonList.find(id)
    end
    lesson_list = LessonList.create!(lesson_id: id, topic_id: params[:topic_id], order_index: params[:order_index])
    lesson_content = LessonContent.create!(lesson_id: id, title: params[:title])

    if lesson_list and lesson_content
      render json: lesson_list
    else
      render json: lesson_list.errors
    end
  end

  def show
    render json: @lesson
  end

  def destroy
    delete_lesson
    render json: { message: 'Lesson deleted!' }
  end

  private
  def lesson_params
    params.permit(:lesson_id, :topic_id, :order_index, :title)
  end

  def set_lesson
    @lesson = LessonContent.find(params[:id])
  end

  def delete_lesson
    LessonContent&.destroy(params[:id])
    LessonList&.destroy(params[:id])
  end
end
