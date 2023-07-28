require 'rails_helper'


RSpec.describe User, type: :model do
  describe 'validations' do
    it 'is valid with valid attributes' do
      user = User.new(user_id: '12344', lessons_access: ["1", "2", "3"])
      expect(user).to be_valid
    end

    it 'is not valid without a user_id' do
      user = User.new(lessons_access: ["1", "2", "3"])
      expect(user).not_to be_valid
    end

    it 'is valid without an lessons_access' do
      user = User.new(user_id: '12344')
      expect(user).to be_valid
    end
  end
end
