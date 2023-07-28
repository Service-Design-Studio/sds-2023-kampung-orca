class TopicController < ApplicationController
  before_action :set_topic, only: %i[show destroy]
  def index
    topics = Topic.all.order(topic_id: :asc)
    render json: topics
  end

  def create
    # TODO: Use uuid or other id generators
    id = rand(0...99_999)
    check = Topic.find(id)
    while check.length != 0
      id = rand(0...99_999)
      check = Topic.find(id)
    end
    topic = Topic.create!(topic_id: id, title: params[:title], num_of_lessons: params[:num_of_lessons])

    if topic
      render json: topic
    else
      render json: topic.errors
    end
  end

  def show
    render json: @topic
  end

  def destroy
    @topic&.destroy
    render json: { message: 'Topic deleted!' }
  end


  private

  def topic_params
    params.permit(:topic_id, :title, :num_of_lessons)
  end

  def set_topic
    @topic = Topic.find(params[:id])
  end
end
