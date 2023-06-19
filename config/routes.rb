Rails.application.routes.draw do
  root 'homepage#index'
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
