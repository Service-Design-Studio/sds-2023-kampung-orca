# app/models/exercise_content.rb
require 'json'
class Exercise < ActiveRecord::Base
  belongs_to :lesson
  self.primary_key = :exercise_id
  serialize :qns, Array
end
