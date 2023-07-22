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
