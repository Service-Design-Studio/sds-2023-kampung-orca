class EntriesController < ApplicationController
  before_action :set_entry, only: %i[show destroy]
  def index
    entrys = entry.all
    render json: entrys
  end

  def create
    id = rand(0...99_999)
    check = Entry.find(id)
    while check.length != 0
      id = rand(0...99_999)
      check = Entry.find(id)
    end
    entry = Entry.create!(entry_id: id, exercise_id: params[:exercise_id], user_id: params[:user_id],
                                user_answer: params[:user_answer], ml_answer: params[:ml_answer])
    if entry
      render json: entry
    else
      render json: Entry.errors
    end
  end

  def show
    render json: entry
  end

  private

  def entry_params
    params.require(:entry).permit(:user_answer, :ml_answer, :exercise_id, :user_id, :entry_id)
  end

  def set_entry
    @entry = Entry.find_by(exercise_id: params[:exercise_id], user_id: params[:user_id])

    # You can also add some error handling if the entry is not found
    if @entry.nil?
      render json: { error: 'Entry not found' }, status: :not_found
    end
  end
end

  # def destroy
  #   entry&.destroy(params[:id])
  #   render json: { message: 'entry deleted!' }
  # end

  # def show_entry
  #   entry = entry.find_by(lesson_id: params[:lesson_id])
  #   render json: entry
  # end