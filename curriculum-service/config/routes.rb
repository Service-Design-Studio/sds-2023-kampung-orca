Rails.application.routes.draw do
  resources :topic, only: [:index, :show, :create, :destroy] do
    resources :lesson, shallow: true do
      resources :exercise, only: [:index, :show, :create, :destroy]
      resources :page, only: [:index, :show, :create, :destroy]
      member do
        post :lesson_completed
      end
    end
  end

  resources :user, only: [:create] do
    member do
      post :open_next_lesson
      post :open_next_exercise
    end
  end
end
