Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'exercise/index'
      get 'exercise/create'
      get 'exercise/show/:id', to: 'exercise#show'
      get 'exercise/destroy', to: 'exercise#destroy'
      get 'topic/index'
      get 'topic/create'
      get 'topic/show', to: 'topic#show'
      get 'topic/destroy', to: 'topic#destroy'

      get 'page/index'
      post 'page/create'
      get 'page/show/:id', to: 'page#show'
      get 'page/destroy/:id', to: "page#destroy"
      post 'page/show/:id/next_page', to: 'page#next_page'
      post 'page/show/:id/pre_page', to: 'page#pre_page'

      get 'lesson/index'
      post 'lesson/:id/next_lesson', to: 'lesson#next_lesson'
      post 'lesson/create'
      get 'lesson/show/:id', to: 'lesson#show'
      get 'lesson/destroy/:id', to: 'lesson#destroy'
      get 'lessonlist/:id', to: 'lesson#lessonlist'
    end
  end
  root 'homepage#index'
  get '*path', to: 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # Referred to as lessons_content_path
  get '/lessons/contents', to: 'lessons#contents', as: 'lessons_contents'

  resources :lessons do
    member do
      get 'page/:page_number', action: :show, as: 'page'
    end
  end




end
