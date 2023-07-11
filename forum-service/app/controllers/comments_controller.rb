class CommentsController < ApplicationController
    before_action :set_comment, only: [:show, :update, :destroy]
    before_action :set_post, only: [:show, :update, :create, :destroy, :index]
  
    # GET /comments
    def index
      @comments = @post.comments
      render json: @comments.to_json(include: { user: { only: [:id, :name] } })
    end
  
    # GET /comments/:id
    def show
      render json: @comments.to_json(include: { user: { only: [:id, :name] } })
    end
  
    # POST /comments
    def create
      @comment = @post.comments.build(comment_params)
      @comment.user = User.find_by(user_id: params[:user_id])
  
      if @comment.save
        render json: @comment, status: :created
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
      head :no_content
    end
  
    private

    def set_post
      @post = Post.find(params[:post_id])
    end
  
    def set_comment
      @comment = Comment.find(params[:id])
      rescue ActiveRecord::RecordNotFound
      render json: { error: 'Comment not found' }, status: :not_found
    end
  
    def comment_params
      params.require(:comment).permit(:content, :user_id)
    end
  end