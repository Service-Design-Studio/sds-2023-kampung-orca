
require 'rails_helper'
require 'json'
RSpec.describe LessonController, type: :controller do
  before :each do
    # Clean up existing records before each test
    Topic.destroy_all
    Lesson.destroy_all
    Topic.create!(topic_id: '00001', title: 'Topic 1')
  end

  describe "Get #index" do
    it 'shows all lessons' do
      Lesson.create!(lesson_id: "00001", topic_id: "00001", order_index: 0, title: 'Test Lesson1' )
      Lesson.create!(lesson_id: "00002", topic_id: "00001", order_index: 1, title: 'Test Lesson2' )
      Lesson.create!(lesson_id: "00003", topic_id: "00001", order_index: 2, title: 'Test Lesson3' )
      Lesson.create!(lesson_id: "00004", topic_id: "00001", order_index: 3, title: 'Test Lesson4' )
      Lesson.create!(lesson_id: "00005", topic_id: "00001", order_index: 4, title: 'Test Lesson5' )
      get :index
      expect(response).to be_successful
  
      parsed_response = JSON.parse(response.body)
      expect(parsed_response.length).to eq(5)
    end
  end

  describe 'POST #create' do
      
      params =  {topic_id: "00001", order_index: 0, title: 'Test Lesson' } 
      it 'creates a new lesson' do
        post :create, params: params

        lesson = Lesson.last
        expect(lesson).to be_present
        expect(lesson.topic_id).to eq("00001")
        expect(lesson.order_index).to eq(0)
        expect(lesson.title).to eq('Test Lesson')
    end
  end

  describe 'GET #show' do
    it 'returns the lesson' do
      Lesson.create!(lesson_id: "00001", topic_id: "00001", order_index: 0, title: 'Test Lesson' )
      get :show, params: {lesson_id: "00001", id: "00001"}

      expect(response).to have_http_status(:success)
      expect(response.content_type).to eq("application/json; charset=utf-8")
      parsed_body = JSON.parse(response.body)
      expect(parsed_body["lesson_id"]).to eq("00001")
    end
  end

  describe '#show_lessons' do

    it 'renders the lessons and lessons_access JSON' do
      lesson = Lesson.create!(lesson_id: "00001", topic_id: "00001", order_index: 0, title: 'Test Lesson' )
      user = User.create!(user_id: "admin", lessons_access:["00001"])

      get :show_lessons, params: { user_id: "admin", topic_id: "00001" }

      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to eq(
        {
          "lessons" => [lesson.as_json],
          "lessons_access"=> [lesson.as_json],
          "topic_id"=> lesson.topic_id
        }
      )
    end
  end
end




# spec/controllers/lesson_controller_spec.rb
# require 'rails_helper'

# RSpec.describe LessonController, type: :controller do
#   before(:each) do
#     # Clean up existing records before each test
#     Lesson.destroy_all
#     User.destroy_all
#   end

#   describe 'POST #create' do
#     it 'creates a new lesson' do
#       topic = Topic.create(topic_id: '00001', title: 'Topic 1')

#       expect do
#         post :create, params: { topic_id: topic.id, order_index: 0, title: 'Lesson 1' }
#       end.to change(Lesson, :count).by(1)

#       expect(response).to be_successful
#       parsed_response = JSON.parse(response.body)
#       expect(parsed_response['title']).to eq('Lesson 1')
#       expect(parsed_response['topic_id']).to eq(topic.id)
#       expect(parsed_response['order_index']).to eq(0)
#     end
#   end

#   describe 'GET #show' do
#     it 'returns a successful response' do
#       topic = Topic.create(topic_id: '00001', title: 'Topic 1')
#       lesson = Lesson.create(lesson_id: '00001', topic_id: topic.id, order_index: 0, title: 'Lesson 1')

#       get :show, params: { lesson_id: lesson.lesson_id }
#       expect(response).to be_successful

#       parsed_response = JSON.parse(response.body)
#       expect(parsed_response['id']).to eq(lesson.id)
#       expect(parsed_response['title']).to eq(lesson.title)
#     end
#   end

#   describe 'GET #index' do
#     it 'returns a successful response' do
#       topic = Topic.create(topic_id: '00001', title: 'Topic 1')
#       lesson1 = Lesson.create(topic_id: topic.id, order_index: 1, title: 'Lesson 1')
#       lesson2 = Lesson.create(topic_id: topic.id, order_index: 2, title: 'Lesson 2')

#       get :index, params: { user_id: 'user_id', topic_id: topic.id }
#       expect(response).to be_successful

#       parsed_response = JSON.parse(response.body)
#       expect(parsed_response['lessons'].length).to eq(2)
#       expect(parsed_response['lessons'].first['id']).to eq(lesson1.id)
#       expect(parsed_response['lessons'].last['id']).to eq(lesson2.id)
#     end
#   end

#   describe 'DELETE #destroy' do
#     it 'deletes the lesson' do
#       topic = Topic.create(topic_id: '00001', title: 'Topic 1')
#       lesson = Lesson.create(topic_id: topic.id, order_index: 0, title: 'Lesson 1')

#       expect do
#         delete :destroy, params: { id: lesson.id }
#       end.to change(Lesson, :count).by(-1)

#       expect(response).to be_successful
#       parsed_response = JSON.parse(response.body)
#       expect(parsed_response['message']).to eq('Lesson deleted!')
#     end
#   end

#   describe 'POST #lesson_completed' do
#     it 'marks the lesson and exercise as completed and returns the next lesson and exercise' do
#       topic = Topic.create(topic_id: '00001', title: 'Topic 1')
#       lesson1 = Lesson.create(topic_id: topic.id, order_index: 0, title: 'Lesson 1')
#       lesson2 = Lesson.create(topic_id: topic.id, order_index: 1, title: 'Lesson 2')

#       exercise = Exercise.create(lesson_id: lesson1.id, topic_id: topic.id, qns: [])

#       user = User.create(user_id: 'user_id', lessons_access: [], exercises_access: [])

#       post :lesson_completed, params: { id: lesson1.id, user_id: user.user_id }

#       expect(response).to be_successful
#       parsed_response = JSON.parse(response.body)
#       expect(parsed_response['next_lesson']).to eq(lesson2.id)
#       expect(user.reload.lessons_access).to include(lesson2.id)
#       expect(user.reload.exercises_access).to include(exercise.id)
#     end
#   end
# end
