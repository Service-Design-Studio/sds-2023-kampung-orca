require 'rails_helper'

RSpec.describe InactivityCheckerController, type: :controller do

  describe 'GET #run_inactivity_check' do
    it 'returns HTTP success status (200)' do
      get :run_inactivity_check
      expect(response).to have_http_status(:success)
    end

    it 'receives starting json' do
      get :run_inactivity_check
      expected_response = {"message":"Inactivity checker started with interval of 61 seconds."}
      expect(response.body).to eq(expected_response.to_json)
    end
    
  end

  describe 'GET #answer_question' do
    it 'returns HTTP success status (200)' do
      get :answer_question
      expect(response).to have_http_status(:success)
    end

    it 'calls answer_question method' do
      expect(controller).to receive(:answer_question)
      get :answer_question
    end

    it 'returns the correct response format' do
      get :answer_question
      expected_response = { "generated_text" => /.*/ }
      expect(response.body).to match(expected_response.to_json)
    end
  end

end