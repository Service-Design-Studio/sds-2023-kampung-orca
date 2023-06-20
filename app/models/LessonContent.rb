# app/models/lesson_content.rb
class LessonContent < ActiveRecord::Base
    #belongs_to :lesson_list
    self.primary_key = :lesson_id
end