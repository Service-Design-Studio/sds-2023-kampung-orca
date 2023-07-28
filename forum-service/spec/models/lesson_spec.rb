require 'rails_helper'

RSpec.describe Lesson, type: :model do

  describe 'validations' do
    it 'is valid with valid attributes' do
      lesson = Lesson.new(title: 'Introduction')
      expect(lesson).to be_valid
    end

    it 'is not valid without a title' do
      # Create a Lesson instance with a valid title
      lesson = Lesson.new(title: '')

      # Expect that the lesson is not valid
      expect(lesson).not_to be_valid
      expect(lesson.errors[:title]).to include("can't be blank")
    end
  end
end
