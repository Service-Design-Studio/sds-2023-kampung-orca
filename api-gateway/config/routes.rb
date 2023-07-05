Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/posts', to: 'forum#forward'
  post '/posts', to: 'forum#forward'
  get '/posts/*path', to: 'forum#forward'
  post '/posts/test_user', to: 'forum#testing'
  post '/users/signup', to: 'user#authorization_code_exchange'
end