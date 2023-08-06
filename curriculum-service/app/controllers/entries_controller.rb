require 'securerandom'

class EntriesController < ApplicationController
  before_action :set_entry, only: %i[show destroy]
  def index
    entrys = Entry.all
    render json: entrys
  end

  def create
    ml_result = answer_question

    exercise = Exercise.find_by(lesson_id: params[:lesson_id])


    user = User.find_by(user_id: params[:user_id])

    puts user

    entry = Entry.create!(entry_id: generate_uuid, exercise: exercise, user: user,
                                user_answer: params[:user_answer], ml_answer:  ml_result)
    if entry
      render json: entry
    else
      render json: Entry.errors
    end
  end

  def show
    if @entry
      render json: @entry
    else
      render json: { error: 'Entry not found' }, status: :not_found
    end
  end

  private

  def entry_params
    params.require(:entry).permit(:user_answer, :exercise_id, :user_id, :entry_id)
  end

  def set_entry
    @entry = Entry.find_by(exercise_id: params[:exercise_id], user_id: params[:user_id])

    # You can also add some error handling if the entry is not found
    if @entry.nil?
      render json: { error: 'Entry not found' }, status: :not_found
    end
  end

  def generate_uuid
    SecureRandom.uuid
  end

  def answer_question
    lesson_id = params[:lesson_id]

    lesson = Lesson.find_by(lesson_id: lesson_id)
    pages = Page.where(lesson_id: lesson_id)

    exercise = Exercise.find_by(lesson_id: lesson_id)

    p params, lesson_id
    question_content = exercise.qns.to_s
    answer_content = params[:user_answer]

    lesson_content = pages.pluck(:sections).flatten.compact


    puts params[:user_answer]

    #need sth here
    question = question_content#"Share with Kampung Kaki a project you would like to do in your neighborhood to promote interfaith dialogue."

    #here also
    answer = answer_content#"‘I will distribute burritos made from prata as the tortilla and chicken rice and satay as the filling."

    lesson = lesson_content.join("\n")

    puts "Lesson" + lesson
    puts "Question" + question
    puts "Answer" + answer

    prompts = "Lesson Content: " + lesson + "\nQuestion: " + question + "\nAnswer " + answer

    ml_url = URI("#{ENV["GATEWAY_URL"]}/ml/review")
    http = Net::HTTP.new(ml_url.host, ml_url.port)
    request = Net::HTTP::Post.new(ml_url)
    request['Content-Type'] = 'application/json'
    request.body = { prompts: prompts }.to_json

    response = http.request(request)
    #render json: question_data#response.body

    response_data = JSON.parse(response.body)
    ml_result = response_data["generated_text"]

    puts response_data
    return ml_result

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
