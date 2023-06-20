# app/models/topic.rb
class Topic < ActiveRecord::Base
    #has_many :lesson_lists
    #has_many :exercise_lists
    self.primary_key = :topic_id
    def get_lessons_list(topic_id)
        topics = LessonList.where(topic_id: topic_id)
        return topics;
    end
    
end