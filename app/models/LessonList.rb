# app/models/lesson_list.rb
class LessonList < ActiveRecord::Base
    belongs_to :topic
    has_one :lesson_content
    has_many :exercise_lists
    has_many :page_lists
end