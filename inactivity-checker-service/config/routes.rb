Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #get '/inactivity-checker/fetch-posts-and-comments', to: 'inactivity_checker#fetch_posts_and_comments'
  #get '/inactivity-checker/check_for_inactivity_and_format_prompts', to: 'inactivity_checker#check_for_inactivity_and_format_prompts'
  get '/inactivity-checker/run_inactivity_check', to: 'inactivity_checker#run_inactivity_check'
  #get '/inactivity-checker/answer_question', to: 'inactivity_checker#answer_question'

end

