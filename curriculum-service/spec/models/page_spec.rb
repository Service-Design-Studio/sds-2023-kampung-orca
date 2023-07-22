require 'rails_helper'

RSpec.describe Page, type: :model do
  describe 'validations' do
    it 'is not valid without a topic_id' do
      topic = Topic.new(title: "help")
      expect(topic).not_to be_valid
    end

    it 'is valid without title' do
      topic = Topic.new(topic_id: '00001')
      expect(topic).to be_valid
    end
    it 'is valid with valid attributes' do
      topic = Topic.create(topic_id: '00001')
      lesson = Lesson.create(
        lesson_id: "00001",
        topic_id: topic.id
      )

      page = Page.new(page_id: "00001",
      lesson_id: lesson.id,
      order_index: 0,
      video: "https://www.youtube.com/embed/QWTv8NbItt0",
      sections: [
        { content:["This is page 1 of lesson 1."]},
        { title: "The Importance of Interfaith Dialogue", content: ["In today's ."]},
        { title: "Exploring Religious Traditions", content: ["Interfaith."]},
        { title: "Building Bridges of Understanding", content: ["In an increasingly."]}
      ])
      expect(page).to be_valid
    end
  end
end
