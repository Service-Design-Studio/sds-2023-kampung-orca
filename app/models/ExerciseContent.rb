# app/models/exercise_content.rb
class ExerciseContent < ActiveRecord::Base
    belongs_to :exercise_list
end