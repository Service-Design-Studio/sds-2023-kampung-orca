class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all
    render json: @posts.to_json(include: { user: { only: [:id, :name] } })
  end

  # GET /posts/:id
  def show
    render json: @post.to_json(include: { user: { only: [:id, :name] } })
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    #@post.user_id = 1  # Placeholder user ID for now

    if @post.save
      render json: @post.to_json(include: { user: { only: [:id, :name] } }), status: :created, location: @post.lesson
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/:id
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/:id
  def destroy
    @post.destroy
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content, :user_id, :lesson_id)
  end
end