require 'rails_helper'

RSpec.describe Topic, type: :model do
  describe 'validations' do
    it 'is valid with valid attributes' do
      topic = Topic.new(topic_id: '00001', title: 'help')
      expect(topic).to be_valid
    end

    it 'is not valid without a topic_id' do
      topic = Topic.new(title: 'help')
      expect(topic).not_to be_valid
    end

    it 'is valid without title' do
      topic = Topic.new(topic_id: '00001')
      expect(topic).to be_valid
    end

    it 'is not valid with duplicate topic_id' do
      topic1 = Topic.create(topic_id: '00001', title: 'Title 1')
      topic2 = Topic.new(topic_id: '00001', title: 'Title 2')

      expect { topic2.save }.to raise_error(ActiveRecord::RecordNotUnique)
    end

    it 'can have multiple lessons' do
      topic = Topic.create(topic_id: '00001', title: 'help')
      lesson1 = topic.lessons.create(lesson_id: '001', order_index: 1, title: 'Lesson 1')
      lesson2 = topic.lessons.create(lesson_id: '002', order_index: 2, title: 'Lesson 2')
      expect(topic.lessons).to eq([lesson1, lesson2])
    end

    it 'can have multiple exercises' do
      topic = Topic.create(topic_id: '00001', title: 'help')
      exercise1 = topic.exercises.create(title: 'Exercise 1')
      exercise2 = topic.exercises.create(title: 'Exercise 2')
      expect(topic.exercises).to eq([exercise1, exercise2])
    end

    it 'is destroyed with associated lessons' do
      topic = Topic.create(topic_id: '00001', title: 'help')
      lesson = topic.lessons.create(lesson_id: '001', order_index: 1, title: 'Lesson 1')
      expect { topic.destroy }.to change { Lesson.count }.by(-1)
    end

    it 'is destroyed with associated exercises' do
      # Create a topic
      topic = Topic.create(topic_id: '00001', title: 'Title')
      lesson = topic.lessons.create(lesson_id: '00001', title: 'Lesson 1')
      # Create an associated exercise
      exercise = Exercise.create!(exercise_id: "00001", topic_id: topic.id, lesson_id: "00001", title: "Sample Exercise 1", qns: [])
      # Check the initial Exercise count
      initial_exercise_count = Exercise.count
      # Destroy the topic
      topic.destroy
      # Check the Exercise count after the topic is destroyed
      expect(Exercise.count).to eq(initial_exercise_count - 1)
    end
  end
end
