require 'rails_helper'

RSpec.describe Page, type: :model do
  describe 'validations' do
    it 'is valid with valid attributes' do
      topic = Topic.create(topic_id: '00001', title: 'Topic Title')
      lesson = Lesson.create(
        lesson_id: '00001',
        topic_id: topic.id,
        order_index: 0,
        title: 'Lesson Title',
        message: 'Explore.'
      )

      page = Page.new(
        page_id: '00001',
        lesson_id: lesson.id,
        order_index: 0,
        video: 'https://www.youtube.com/embed/QWTv8NbItt0',
        sections: [
          { content: ['This is page 1 of lesson 1.'] },
          { title: 'The Importance of Interfaith Dialogue', content: ["In today's ."] },
          { title: 'Exploring Religious Traditions', content: ['Interfaith.'] },
          { title: 'Building Bridges of Understanding', content: ['In an increasingly.'] }
        ]
      )
      expect(page).to be_valid
    end

    it 'is not valid without a page_id' do
      topic = Topic.create(topic_id: '00001', title: 'Topic Title')
      lesson = Lesson.create(
        lesson_id: '00001',
        topic_id: topic.id,
        order_index: 0,
        title: 'Lesson Title',
        message: 'Explore.'
      )

      page = Page.new(
        lesson_id: lesson.id,
        order_index: 0,
        video: 'https://www.youtube.com/embed/QWTv8NbItt0',
        sections: [
          { content: ['This is page 1 of lesson 1.'] },
          { title: 'The Importance of Interfaith Dialogue', content: ["In today's ."] },
          { title: 'Exploring Religious Traditions', content: ['Interfaith.'] },
          { title: 'Building Bridges of Understanding', content: ['In an increasingly.'] }
        ]
      )
      expect(page).not_to be_valid
      expect(page.errors[:page_id]).to include("can't be blank")
    end

    it 'is not valid without a lesson_id' do
      page = Page.new(
        page_id: '00001',
        order_index: 0,
        video: 'https://www.youtube.com/embed/QWTv8NbItt0',
        sections: [
          { content: ['This is page 1 of lesson 1.'] },
          { title: 'The Importance of Interfaith Dialogue', content: ["In today's ."] },
          { title: 'Exploring Religious Traditions', content: ['Interfaith.'] },
          { title: 'Building Bridges of Understanding', content: ['In an increasingly.'] }
        ]
      )
      expect(page).not_to be_valid
      expect(page.errors[:lesson_id]).to include("can't be blank")
    end
  end

  describe 'associations' do
    it 'belongs to a lesson' do
      association = Page.reflect_on_association(:lesson)
      expect(association.macro).to eq(:belongs_to)
    end
  end
end
