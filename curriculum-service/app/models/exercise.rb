# app/models/exercise.rb
require 'json'
class Exercise < ApplicationRecord
  belongs_to :lesson
  self.primary_key = :exercise_id
  serialize :qns, Array
end
