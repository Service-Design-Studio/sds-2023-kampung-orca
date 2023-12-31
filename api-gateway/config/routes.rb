Rails.application.routes.draw do
  get 'lessons', to: 'forum#forward'
  post 'lessons', to: 'forum#forward'
  patch 'lessons', to: 'forum#forward'
  delete 'lessons', to: 'forum#forward'

  get '/lessons/*path', to: 'forum#forward' #posting to forum, with cookies
  post '/lessons/*path', to: 'forum#forward' #posting to forum, with cookies
  patch '/lessons/*path', to: 'forum#forward' #posting to forum, with cookies
  put '/lessons/*path', to: 'forum#forward' #posting to forum, with cookies
  delete '/lessons/*path', to: 'forum#forward' #posting to forum, with cookies

  get '/posts/*path', to: 'forum#forward'
  post '/posts/test_user', to: 'forum#testing'
  
  post '/users/signup', to: 'user#authorization_code_exchange'
  get '/users/profile', to: 'user#profile'
  
  get '/curriculum/*path', to: 'curriculum#forward_request'
  post '/curriculum/*path', to: 'curriculum#forward_request'

  post '/ml/review', to: 'ml#forward'
  post '/ml/generate-comment', to: 'ml#forward'
end