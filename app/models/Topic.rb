# app/models/topic.rb
class Topic < ActiveRecord::Base
    has_many :lesson_lists
    has_many :exercise_lists
end