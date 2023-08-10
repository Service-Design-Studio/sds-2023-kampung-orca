class PageController < ApplicationController
  before_action :set_page, only: %i[show destroy]
  def index
    page = Page.all
    render json: page
  end

  def create
    # TODO: Use uuid or other id generators
    id = rand(0...99_999)
    check = Page.find(id)
    while check.length != 0
      id = rand(0...99_999)
      check = Page.find(id)
    end
    page = Page.create!(page_id: id, lesson_id: params[:lesson_id], order_index: params[:order_index],
                        video: params[:video], words: params[:words])

    if page
      render json: page
    else
      render json: page.errors
    end
  end

  def show
    render json: @page
  end

  def destroy
    Page&.destroy(params[:id])
    render json: { message: 'Page deleted!' }
  end

  def show_pages
    if Lesson.where(lesson_id: params[:lesson_id]).exists?
      user = User.find(params[:user_id])
      if user.lessons_access.include?(params[:lesson_id])
        pages = Page.where(lesson_id: params[:lesson_id]).order(order_index: :asc)
        render json: { pages:, topic_id: Lesson.where(lesson_id: params[:lesson_id]).first.topic_id }
      else
        render json: { message: 'User unauthorized to see lesson' }
      end
    else
      render json: { message: 'Lesson does not exist' }
    end
  end

  private

  def page_params
    params.permit(:page_id, :lesson_id, :order_index, :video, :words, :lesson_id)
  end

  def set_page
    @page = Page.find(params[:id])
  end
end
