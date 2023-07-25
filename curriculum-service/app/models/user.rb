require 'json'
class User < ApplicationRecord
  self.primary_key = :user_id
  validates :user_id, presence: true
  serialize :lessons_access, Array
  serialize :exercises_access, Array
end
