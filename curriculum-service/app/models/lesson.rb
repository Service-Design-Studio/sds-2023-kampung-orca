# app/models/lesson.rb
class Lesson < ApplicationRecord
  belongs_to :topic, counter_cache: true
  has_many :pages
  has_many :exercies
  # TODO: ID should be a string not integer!!
  self.primary_key = :lesson_id
  validates :lesson_id,:topic_id, presence: true
end
