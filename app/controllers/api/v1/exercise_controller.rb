class Api::V1::ExerciseController < ApplicationController
  before_action :set_exercise, only: %i[show destroy]
  def index
    exercise = ExerciseContent.all
    puts exercise.to_json
    render json: exercise
  end

  def create
    id = rand(0...99999)
    check = ExerciseList.find(id)
    while check.length != 0
      id = rand(0...99999)
      check = ExerciseList.find(id)
    end
    exercise = ExerciseContent.create!(exercise_id: id, title: params[:title], qns: params[:qns])
    exercise_list = ExerciseList.create!(exercise_id: id, topic_id: params[:topic_id], lesson_id: params[:lesson_id])

    if exercise and exercise_list
      render json: exercise
    else
      render json: exercise.errors
    end
  end

  def show
    render json: @exercise
  end

  def destroy
    delete_exercise
    render json: { message: 'Exercise deleted!' }
  end

  private
  def exercise_params
    params.permit(:exercise_id, :topic_id, :lesson_id, :title, :qns)
  end

  def set_page
    @exercise = ExerciseContent.find(params[:id])
  end

  def delete_page
    ExerciseContent&.destroy(params[:id])
    ExerciseList&.destroy(params[:id])
  end
end
