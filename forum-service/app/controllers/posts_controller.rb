class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :set_lesson, only: [:create, :index]

  # GET /posts
  def index
    #@lesson = Lesson.find(params[:lesson_id])
    @posts = @lesson.posts.all
    render json: @posts.to_json(include: { user: { only: [:id, :name] } })
  end

  # GET /posts/:id
  def show
    render json: @post.to_json(include: { user: { only: [:id, :name] } })
  end

  # POST /posts
  def create
    @post = @lesson.posts.build(post_params)
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

  def set_lesson
    @lesson = Lesson.find(params[:lesson_id])
  end

  def post_params
    params.require(:post).permit(:title, :content, :user_id)
  end
end