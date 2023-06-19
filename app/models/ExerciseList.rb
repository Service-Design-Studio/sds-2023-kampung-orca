# app/models/exercise_list.rb
class ExerciseList < ActiveRecord::Base
    belongs_to :topic
    belongs_to :lesson_list
    has_one :exercise_contents
end