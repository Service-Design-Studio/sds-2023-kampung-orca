Rails.application.routes.draw do
  mount Rswag::Api::Engine => 'api-docs'
  mount Rswag::Ui::Engine => 'api-docs'
  resources :topic, only: [:index, :show, :create, :destroy], param: :topic_id do
    member do
      get 'lesson/show_lessons', to: 'lesson#show_lessons'
    end
    resources :lesson, shallow: true, only: [:create], param: :lesson_id do
      member do
        post :lesson_completed
        get '/show_pages', to: 'page#show_pages'
        get '/show_exercise', to: 'exercise#show_exercise'
      end
    end
  end

  resources :lesson , only: [:index, :show, :create, :destroy]
  resources :exercise , only: [:index, :show, :create, :destroy]
  resources :page, only: [:index, :show, :create, :destroy]

  resources :user, only: [:create] do
    member do
      post :open_next_lesson
      post :open_next_exercise
    end
  end
end
