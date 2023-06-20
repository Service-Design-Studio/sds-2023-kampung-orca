class Api::V1::PageController < ApplicationController
  before_action :set_page, only: %i[show destroy]
  def index
    page = PageContent.all
    puts page.to_json
    render json: page
  end

  def create
    id = rand(0...99999)
    check = PageList.find(id)
    while check.length != 0
      id = rand(0...99999)
      check = PageList.find(id)
    end
    page = PageContent.create!(page_id: id, video: params[:video], words: params[:words])
    page_list = PageList.create!(page_id: id, lesson_id: params[:lesson_id], order_index: params[:order_index])

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
    delete_page
    render json: { message: 'Page deleted!' }
  end

  private
  def page_params
    params.permit(:page_id, :lesson_id, :order_index, :video, :words)
  end

  def set_page
    @page = PageContent.find(params[:id])
  end

  def delete_page
    PageContent&.destroy(params[:id])
    PageList&.destroy(params[:id])
  end
end
