Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get 'users/user/google_oauth', to: 'users/user#google_oauth'
  scope :user do
    post 'google' => 'users/user#google'
    post 'authorization_code_exchange' => 'users/user#authorization_code_exchange'
    post 'verify_token' => 'users/user#verify_token'
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
