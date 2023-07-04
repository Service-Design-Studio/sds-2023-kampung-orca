class LessonsController < ApplicationController
    before_action :set_lesson, only: [:show, :update, :destroy]
  
    # GET /lessons
    def index
      @lessons = Lesson.all
      render json: @lessons
    end
  
    # GET /lessons/:id
    def show
      render json: @lesson
    end
  
    # POST /lessons
    # Request Body: { "lesson": { "title": "Lesson Title" } }
    def create
      @lesson = Lesson.new(lesson_params)
  
      if @lesson.save
        render json: @lesson, status: :created
      else
        render json: @lesson.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /lessons/:id
    # Request Body: { "lesson": { "title": "New Lesson Title" } }
    def update
      if @lesson.update(lesson_params)
        render json: @lesson
      else
        render json: @lesson.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /lessons/:id
    def destroy
      @lesson.destroy
      head :no_content
    end
  
    private
  
    #find lesson by id
    def set_lesson
      @lesson = Lesson.find(params[:id])
    end
  
    #only allow title parameter
    def lesson_params
      params.require(:lesson).permit(:title)
    end
  end
  