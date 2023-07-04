class CommentsController < ApplicationController
    before_action :set_comment, only: [:show, :update, :destroy]
  
    # GET /comments
    def index
      @post = Post.find(params[:post_id])
      @comments = @post.comments
      render json: @comments.to_json(include: { user: { only: [:id, :name] } })
    end
  
    # GET /comments/:id
    def show
      render json: @comments.to_json(include: { user: { only: [:id, :name] } })
    end
  
    # POST /comments
    def create
      @comment = Comment.new(comment_params)
      #@comment.user_id = 1  # Placeholder user ID for now
  
      if @comment.save
        render json: @comment, status: :created, location: lesson_post_comments_path(@comment.post)
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /comments/:id
    def update
      if @comment.update(comment_params)
        render json: @comment
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /comments/:id
    def destroy
      @comment.destroy
    end
  
    private
  
    def set_comment
      @comment = Comment.find(params[:id])
    end
  
    def comment_params
      params.require(:comment).permit(:content, :post_id, :user_id)
    end
  end