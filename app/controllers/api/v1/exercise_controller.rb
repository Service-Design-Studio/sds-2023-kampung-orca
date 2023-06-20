require 'json'
class Api::V1::ExerciseController < ApplicationController
  before_action :set_exercise, only: %i[show destroy]
  def index
    exercises = Exercise.all
    render json: exercises
  end

  def create
    id = rand(0...99_999)
    check = Exercise.find(id)
    while check.length != 0
      id = rand(0...99_999)
      check = Exercise.find(id)
    end
    exercise = Exercise.create!(exercise_id: id, topic_id: params[:topic_id], lesson_id: params[:lesson_id],
                                title: params[:title], qns: params[:qns])

    if exercise
      render json: exercise
    else
      render json: exercise.errors
    end
  end

  def show
    render json: @exercise
  end

  def destroy
    Exercise&.destroy(params[:id])
    render json: { message: 'Exercise deleted!' }
  end

  private

  def exercise_params
    params.permit(:exercise_id, :topic_id, :lesson_id, :title, :qns)
  end

  def set_page
    @exercise = Exercise.find(params[:id])
  end
end
