# app/models/topic.rb
class Topic < ApplicationRecord
  has_many :lessons, dependent: :destroy
  has_many :exercises
  # has_many :exercise_lists
  # TODO: ID should be a string not integer!!
  self.primary_key = :topic_id
end
