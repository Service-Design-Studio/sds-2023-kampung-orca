# spec/controllers/lessons_controller_spec.rb
require 'rails_helper'

RSpec.describe LessonsController, type: :controller do
  describe 'GET #index' do
    it 'returns a successful response' do
      get :index
      expect(response).to be_successful
    end
  end

  describe 'GET #show' do
    it 'returns a successful response' do
      lesson = Lesson.create(title: 'Test Lesson')
      get :show, params: { id: lesson.id }
      expect(response).to be_successful

      parsed_response = JSON.parse(response.body)
      expect(parsed_response['title']).to eq(lesson.title)
    end

    it 'returns not_found status for non-existent lesson' do
      get :show, params: { id: 999 }
      expect(response).to have_http_status(:not_found)
    end
  end

  describe 'POST #create' do
    it 'creates a new lesson' do
      lesson_params = { title: 'New Lesson' }
      post :create, params: { lesson: lesson_params }

      expect(response).to have_http_status(:created)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response['title']).to eq('New Lesson')
    end

    it 'returns unprocessable_entity status for invalid lesson' do
      post :create, params: { lesson: { title: '' } }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe 'PATCH #update' do
    it 'updates an existing lesson' do
      lesson = Lesson.create(title: 'Old Title')
      patch :update, params: { id: lesson.id, lesson: { title: 'New Title' } }

      expect(response).to be_successful
      lesson.reload
      expect(lesson.title).to eq('New Title')
    end

    it 'returns unprocessable_entity status for invalid lesson update' do
      lesson = Lesson.create(title: 'Old Title')
      patch :update, params: { id: lesson.id, lesson: { title: '' } }

      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe 'DELETE #destroy' do
    it 'destroys an existing lesson' do
      lesson = Lesson.create(title: 'Lesson to be deleted')
      delete :destroy, params: { id: lesson.id }

      expect(response).to have_http_status(:no_content)
      expect(Lesson.exists?(lesson.id)).to be_falsey
    end

    it 'returns not_found status for non-existent lesson' do
      delete :destroy, params: { id: 999 }
      expect(response).to have_http_status(:not_found)
    end
  end
end
