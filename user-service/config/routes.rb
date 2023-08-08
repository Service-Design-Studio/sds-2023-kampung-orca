Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  scope :user do
    get ""=> 'users/user#index' 
    get ":id" => "users/user#show"
    delete ":id" => "users/user#destroy"
    post 'google' => 'users/user#google'
    get 'google-callback' => 'users/user#google'
    post 'authorization_code_exchange' => 'users/user#authorization_code_exchange'
    post 'verify_token' => 'users/user#verify_token'
    get 'profile' => 'users/user#profile'
  end
  # Defines the root path route ("/")
  # root "articles#index" 
end
