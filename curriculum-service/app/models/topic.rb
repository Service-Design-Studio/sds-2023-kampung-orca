# app/models/topic.rb
class Topic < ActiveRecord::Base
  has_many :lessons
  has_many :exercises
  # has_many :exercise_lists
  self.primary_key = :topic_id

  
end
