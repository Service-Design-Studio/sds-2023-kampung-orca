class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]
  
    # GET /users
    def index
      @users = User.all
      render json: @users
    end
  
    # GET /users/:id
    def show
      render json: @user
    end
  
    # POST /users
    def create
      if User.exists?(user_id: user_params[:user_id]) == false
        @user = User.new(user_params)
  
        if @user.save
          render json: @user, status: :created
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      else
        @user = User.find(user_params[:user_id])
        render json: @user, status: :ok
      end
    end
  
    # PATCH/PUT /users/:id
    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /users/:id
    def destroy
      @user.destroy
      head :no_content
    end
  
    private
  
    def set_user
      @user = User.find(params[:user_id])
      rescue ActiveRecord::RecordNotFound
      render json: { error: 'User not found' }, status: :not_found
    end
  
    def user_params
      params.require(:user).permit(:user_id, :name, :email)
    end
  end