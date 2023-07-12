# app/models/lesson.rb
class Lesson < ActiveRecord::Base
  belongs_to :topic
  has_many :pages
  has_many :exercies
  self.primary_key = :lesson_id
end
