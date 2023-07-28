# spec/controllers/topic_controller_spec.rb
require 'rails_helper'

RSpec.describe TopicController, type: :controller do
  before(:each) do
    # Clean up existing records before each test
    Topic.destroy_all
  end

  describe 'GET #index' do
    it 'returns a successful response' do
      get :index
      expect(response).to be_successful
    end

    it 'returns a list of topics in ascending order of topic_id' do
      topic1 = Topic.create(topic_id: '00002', title: 'Topic 2')
      topic2 = Topic.create(topic_id: '00001', title: 'Topic 1')

      get :index

      expect(response).to be_successful
      parsed_response = JSON.parse(response.body)
      expect(parsed_response).to be_an(Array)
      expect(parsed_response.first['topic_id']).to eq(topic2.topic_id)
      expect(parsed_response.last['topic_id']).to eq(topic1.topic_id)
    end
  end

  describe 'POST #create' do
    it 'creates a new topic' do
      expect do
        post :create, params: { title: 'New Topic'}
      end.to change(Topic, :count).by(1)

      expect(response).to be_successful
      parsed_response = JSON.parse(response.body)
      expect(parsed_response['title']).to eq('New Topic')
      expect(parsed_response['num_of_lessons']).to eq(nil)
    end
  end

  describe 'GET #show' do
    it 'returns a successful response' do
      topic = Topic.create(topic_id: '00001', title: 'Topic 1')

      get :show, params: { id: topic.id }
      expect(response).to be_successful

      parsed_response = JSON.parse(response.body)
      expect(parsed_response['topic_id']).to eq(topic.topic_id)
      expect(parsed_response['title']).to eq(topic.title)
    end
  end

  describe 'DELETE #destroy' do
    it 'deletes the topic' do
      topic = Topic.create(topic_id: '00001', title: 'Topic 1')

      expect do
        delete :destroy, params: { id: topic.id }
      end.to change(Topic, :count).by(-1)

      expect(response).to be_successful
      parsed_response = JSON.parse(response.body)
      expect(parsed_response['message']).to eq('Topic deleted!')
    end

    it 'returns a successful response when topic is not found' do
      delete :destroy, params: { id: 'non_existent_id' }
      expect(response).to be_successful
      parsed_response = JSON.parse(response.body)
      expect(parsed_response['message']).to eq('Topic deleted!')
    end
  end
end
