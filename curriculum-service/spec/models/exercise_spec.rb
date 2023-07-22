require 'rails_helper'

RSpec.describe Exercise, type: :model do
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

      exercise = Exercise.new(
        exercise_id: '00001',
        topic_id: topic.id,
        lesson_id: lesson.id,
        title: 'Exercise Title',
        qns: [{ question: 'Question 1', answer: 'Answer 1' }]
      )
      expect(exercise).to be_valid
    end

    it 'is not valid without an exercise_id' do
      topic = Topic.create(topic_id: '00001', title: 'Topic Title')
      lesson = Lesson.create(
        lesson_id: '00001',
        topic_id: topic.id,
        order_index: 0,
        title: 'Lesson Title',
        message: 'Explore.'
      )

      exercise = Exercise.new(
        topic_id: topic.id,
        lesson_id: lesson.id,
        title: 'Exercise Title',
        qns: [{ question: 'Question 1', answer: 'Answer 1' }]
      )
      expect(exercise).not_to be_valid
      expect(exercise.errors[:exercise_id]).to include("can't be blank")
    end

    it 'is not valid without a topic_id' do
      lesson = Lesson.create(
        lesson_id: '00001',
        topic_id: '00001',
        order_index: 0,
        title: 'Lesson Title',
        message: 'Explore.'
      )

      exercise = Exercise.new(
        exercise_id: '00001',
        lesson_id: lesson.id,
        title: 'Exercise Title',
        qns: [{ question: 'Question 1', answer: 'Answer 1' }]
      )
      expect(exercise).not_to be_valid
      expect(exercise.errors[:topic_id]).to include("can't be blank")
    end

    it 'is not valid without a lesson_id' do
      topic = Topic.create(topic_id: '00001', title: 'Topic Title')

      exercise = Exercise.new(
        exercise_id: '00001',
        topic_id: topic.id,
        title: 'Exercise Title',
        qns: [{ question: 'Question 1', answer: 'Answer 1' }]
      )
      expect(exercise).not_to be_valid
      expect(exercise.errors[:lesson_id]).to include("can't be blank")
    end
  end

  describe 'associations' do
    it 'belongs to a lesson' do
      association = Exercise.reflect_on_association(:lesson)
      expect(association.macro).to eq(:belongs_to)
    end
  end
end
