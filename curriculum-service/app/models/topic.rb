# app/models/topic.rb
class Topic < ApplicationRecord
  has_many :lessons, dependent: :destroy
  has_many :exercises, dependent: :destroy
  # has_many :exercise_lists
  # TODO: ID should be a string not integer!!
  self.primary_key = :topic_id
  validates :topic_id, presence: true
end
