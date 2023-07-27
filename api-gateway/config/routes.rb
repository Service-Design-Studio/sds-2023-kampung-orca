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
  get '/curriculum/*path', to: 'curriculum#forward_request'
  post '/curriculum/*path', to: 'curriculum#forward_request'

  get 'inactivity-checker/fetch-posts-and-comments', to: 'inactivity_checker#fetch_posts_and_comments'
  get '/inactivity-checker/run_inactivity_check', to: 'inactivity_checker#run_inactivity_check'
end