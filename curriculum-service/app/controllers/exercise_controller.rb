require 'json'
require 'securerandom'
class ExerciseController < ApplicationController
  before_action :set_exercise, only: %i[show destroy]
  def index
    exercises = Exercise.all
    render json: exercises
  end

  def create
    # TODO: Use uuid or other id generators
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
    if @exercise
      render json: @exercise
    else
      render json: { error: 'Exercise not found' }, status: :not_found
    end
  end

  def destroy
    Exercise&.destroy(params[:id])
    render json: { message: 'Exercise deleted!' }
  end

  def show_exercise
    exercise = Exercise.find_by(lesson_id: params[:lesson_id])
    render json: exercise
  end

  private

  def exercise_params
    params.permit(:exercise_id, :topic_id, :lesson_id, :title, :qns)
  end

  def set_exercise
    @exercise = Exercise.find(params[:exercise_id])
  end

  def generate_uuid
    SecureRandom.uuid
  end
end
