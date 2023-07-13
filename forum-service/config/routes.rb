Rails.application.routes.draw do
  resources :lessons do
    resources :posts do
      resources :comments
    end
  end
end