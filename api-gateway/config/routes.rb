Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/posts', to: 'forum#forward'
  post '/lessons/1/posts', to: 'forum#forward' #posting to forum, with cookies
  get '/posts/*path', to: 'forum#forward'
  post '/posts/test_user', to: 'forum#testing'
  post '/users/signup', to: 'user#authorization_code_exchange'


  post '/curriculum/*path', to: 'curriculum#forward_request'
end