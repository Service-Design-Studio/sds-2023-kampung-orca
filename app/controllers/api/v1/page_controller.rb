class Api::V1::PageController < ApplicationController
  before_action :set_page, only: %i[show destroy]
  def index
    page = Page.all
    puts page.to_json
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

  def next_page
    page = Page.where(lesson_id: params[:lesson_id], order_index: params[:order_index] + 1)
    render json: page
  end

  def pre_page
    page = Page.where(lesson_id: params[:lesson_id], order_index: params[:order_index] - 1)
    render json: page
  end

  private

  def page_params
    params.permit(:page_id, :lesson_id, :order_index, :video, :words)
  end

  def set_page
    @page = Page.find(params[:id])
  end
end
