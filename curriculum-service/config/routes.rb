Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'exercise/index'
      get 'exercise/create'
      get 'topic/:topic_id/lesson=:lesson_id/exercise/:exercise_id/view', to: 'exercise#show' #show exercise
      get 'exercise/destroy', to: 'exercise#destroy'

      get "topics", to: 'topic/index' 
      post 'topics/view', to: 'topic#index' #show topics
      get 'topic/create'
      get 'topic/show/:id', to: 'topic#show'
      get 'topic/destroy', to: 'topic#destroy'

      get 'page/index'
      post 'page/create'
      get 'page/show/:id', to: 'page#show'
      get 'page/destroy/:id', to: 'page#destroy'
      post 'topic/:topic_id/lesson/:lesson_id/view', to: "page#get_pages_by_lesson" #get pages for lesson viewing

      get 'lesson/index'
      post 'lesson/create'
      get 'lesson/show/:id', to: 'lesson#show'
      get 'lesson/destroy/:id', to: 'lesson#destroy'
      post 'topic/:topic_id/view', to: 'lesson#lesson_list' #for lesson pathway, with user's lessons_access

      post 'topic/:topic_id/lesson/:lesson_id/lesson_completed', to: "user#open_next_lesson" #for completed lesson, add user_id 
      post 'topic/:topic_id/lesson/:lesson_id/exercise/:exercise_id/exercise_completed', to: "user#open_next_exercise" #for completed exercise, add user_id

      post 'user/create'

    end
  end
  # root 'homepage#index'
  # get '*path', to: 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # Referred to as lessons_content_path

  resources :lessons do
    member do
      get 'page/:page_number', action: :show, as: 'page'
    end
  end
end
