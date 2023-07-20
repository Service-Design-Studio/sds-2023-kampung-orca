require 'rails_helper'

RSpec.describe Page, type: :model do
  describe 'validations' do
    it 'is valid with valid attributes' do
      page = Page.new(page_id: '00001')
      expect(topic).to be_valid
    end

    it 'is not valid without a topic_id' do
      topic = Topic.new(title: "help")
      expect(topic).not_to be_valid
    end

    it 'is valid without title' do
      topic = Topic.new(topic_id: '00001')
      expect(topic).to be_valid
    end
  end
end
