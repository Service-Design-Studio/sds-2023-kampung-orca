require 'rails_helper'

require 'rails_helper'

RSpec.describe Lesson, type: :model do
  describe 'validations' do
    it 'is valid with valid attributes' do
      topic = Topic.create(topic_id: '00001', title: 'Topic Title')
      lesson = Lesson.new(
        lesson_id: '00001',
        topic_id: topic.id,
        order_index: 0,
        title: 'Lesson Title'
      )
      expect(lesson).to be_valid
    end

    it 'is not valid without a lesson_id' do
      topic = Topic.create(topic_id: '00001', title: 'Topic Title')
      lesson = Lesson.new(
        topic_id: topic.id,
        order_index: 0
      )
      expect(lesson).not_to be_valid
      expect(lesson.errors[:lesson_id]).to include("can't be blank")
    end

    it 'is not valid without a topic_id' do
      lesson = Lesson.new(
        lesson_id: '00001',
        order_index: 0
      )
      expect(lesson).not_to be_valid
      expect(lesson.errors[:topic_id]).to include("can't be blank")
    end
  end

  describe 'associations' do
    it 'belongs to a topic' do
      association = Lesson.reflect_on_association(:topic)
      expect(association.macro).to eq(:belongs_to)
    end

    it 'has many pages' do
      association = Lesson.reflect_on_association(:pages)
      expect(association.macro).to eq(:has_many)
    end

    it 'has many exercises' do
      association = Lesson.reflect_on_association(:exercies)
      expect(association.macro).to eq(:has_many)
    end
  end
end
