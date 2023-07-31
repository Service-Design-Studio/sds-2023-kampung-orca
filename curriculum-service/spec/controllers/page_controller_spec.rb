require 'rails_helper'

require 'rails_helper'

RSpec.describe PageController, type: :controller do
  before(:each) do
    Topic.destroy_all
    Lesson.destroy_all
    Page.destroy_all
    Topic.create!(topic_id: "00001", title: "Smaple Topic")
    Lesson.create!(lesson_id: "00001", topic_id: "00001")
    User.create!(user_id: "00001")
  
  end

  describe 'GET #index' do
    it 'gets all pages' do
      Page.create!(page_id: "00001", lesson_id: "00001")
      Page.create!(page_id: "00002", lesson_id: "00001")
      get :index
      expect(response).to be_successful
  
      parsed_response = JSON.parse(response.body)
      expect(parsed_response.length).to eq(2)

    end
  end

  describe 'POST #create' do
    it 'creates a new page' do
      lesson_id = "00001" 
      order_index = 2
      video = 'new_sample_video_url'
      words = 'new_sample_words'

      post :create, params: { lesson_id: lesson_id, order_index: order_index, video: video, words: words }
      expect(response).to have_http_status(:success)
      # Check if the page was created and returned in the response
      created_page = JSON.parse(response.body)
      expect(created_page['lesson_id']).to eq(lesson_id)
      expect(created_page['order_index']).to eq(order_index)
      expect(created_page['video']).to eq(video)
      expect(created_page['words']).to eq(words)
    end
  end

  describe 'GET #show' do
    it 'returns the page' do
      page_id = "00002"
      lesson_id = "00001"
      order_index = 2
      video = 'new_sample_video_url'
      words = 'new_sample_words'
      page = Page.create!(page_id: page_id, lesson_id: lesson_id, order_index: order_index, video: video, words: words )

      get :show, params: { page_id: page_id, id: page_id }
      expect(response).to have_http_status(:success)

      # Check if the correct page is returned in the response
      returned_page = JSON.parse(response.body)
      expect(returned_page['page_id']).to eq(page_id)
    end
  end

  describe 'DELETE #destroy' do
    it 'destroys the page' do
      page_id = "00003"
      lesson_id = "00001" 
      order_index = 2
      video = 'new_sample_video_url'
      words = 'new_sample_words'
      page = Page.create!(page_id: page_id, lesson_id: lesson_id, order_index: order_index, video: video, words: words )
      delete :destroy, params: { page_id: page_id, id: page_id }
      expect(response).to have_http_status(:success)

      # Check if the page was deleted
      expect(Page.exists?(page_id: page_id)).to be_falsey
    end
  end



  describe 'GET #show_pages' do
    it 'returns pages for an existing lesson with authorized user' do
      lesson_id = "00001" 
      user_id = "00001"

      User.find(user_id).update(lessons_access: [lesson_id])
      Page.create!(page_id: "00001", lesson_id: "00001")
      Page.create!(page_id: "00002", lesson_id: "00001")
      get :show_pages, params: { lesson_id: lesson_id, user_id: user_id }
      expect(response).to have_http_status(:success)

      # Check if the correct pages are returned in the response
      response_data = JSON.parse(response.body)
      expect(response_data['pages'].length).to eq(Page.where(lesson_id: lesson_id).count)
    end

    it 'returns an error message for an unauthorized user' do
      lesson_id = "00001" 
      user_id = "00001"
      Page.create!(page_id: "00001", lesson_id: "00001")
      Page.create!(page_id: "00002", lesson_id: "00001")
      get :show_pages, params: { lesson_id: lesson_id, user_id: user_id }
      expect(response).to have_http_status(:success)

      # Check if the correct error message is returned in the response
      response_data = JSON.parse(response.body)
      p response_data
      expect(response_data['message']).to eq('User unauthorized to see lesson')
    end

    it 'returns an error message for a non-existing lesson' do
      lesson_id = "9999"
      get :show_pages, params: { lesson_id: lesson_id, user_id: "00001"}
      expect(response).to have_http_status(:success)

      # Check if the correct error message is returned in the response
      response_data = JSON.parse(response.body)
      expect(response_data['message']).to eq('Lesson does not exist')
    end
  end
end

