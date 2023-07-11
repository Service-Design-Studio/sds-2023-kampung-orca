class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :set_lesson, only: [:show, :update, :create, :destroy, :index]

  # GET /posts
  def index
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
    @post.user = User.find_by(user_id: params[:user_id])
    
    if @post.save
      render json: @post.to_json(include: { user: { only: [:id, :name] } }), status: :created
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
    head :no_content
  end

  private

  def set_post
    @post = Post.find(params[:id])
    rescue ActiveRecord::RecordNotFound
    render json: { error: 'Post not found' }, status: :not_found
  end

  def set_lesson
    @lesson = Lesson.find(params[:lesson_id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Lesson not found' }, status: :not_found
  end

  def post_params
    params.require(:post).permit(:title, :content, :user_id.to_s)
  end
end