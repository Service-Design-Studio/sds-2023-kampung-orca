Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get 'lessons', to: 'lessons#index'
  get 'lessons/:id', to: 'lessons#show'
  post 'lessons', to: 'lessons#create'
  patch 'lessons/:id', to: 'lessons#update'
  put 'lessons/:id', to: 'lessons#update'
  delete 'lessons/:id', to: 'lessons#destroy'

  get 'lessons/:lesson_id/posts', to: 'posts#index'
  get 'lessons/:lesson_id/posts/:id', to: 'posts#show'
  post 'lessons/:lesson_id/posts', to: 'posts#create'
  patch 'lessons/:lesson_id/posts/:id', to: 'posts#update'
  put 'lessons/:lesson_id/posts/:id', to: 'posts#update'
  delete 'lessons/:lesson_id/posts/:id', to: 'posts#destroy'

  get 'lessons/:lesson_id/posts/:post_id/comments', to: 'comments#index'
  get 'lessons/:lesson_id/posts/:post_id/comments/:id', to: 'comments#show'
  post 'lessons/:lesson_id/posts/:post_id/comments', to: 'comments#create'
  patch 'lessons/:lesson_id/posts/:post_id/comments/:id', to: 'comments#update'
  put 'lessons/:lesson_id/posts/:post_id/comments/:id', to: 'comments#update'
  delete 'lessons/:lesson_id/posts/:post_id/comments/:id', to: 'comments#destroy'

end
  # Defines the root path route ("/")
  # root "articles#index"
  # resources :users
  # resources :lessons do
  #   resources :posts do
  #     resources :comments
  #   end
  # end