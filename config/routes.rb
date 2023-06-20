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
      get 'topic/destroy' to: 'topic#destroy'

      get 'page/index'
      post 'page/create'
      get 'page/show/:id', to: 'page#show'
      get 'page/destroy/:id', to: "page#destroy"

      get 'lesson/index'
      post 'lesson/create'
      get 'lesson/show/:id', to: 'lesson#show'
      get 'lesson/destroy/:id', to: 'lesson#destroy'
    end
  end
  root 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
