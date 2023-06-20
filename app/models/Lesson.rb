# app/models/lesson_content.rb
class Lesson < ActiveRecord::Base
    belongs_to :topic
    has_many :pages
    has_many :exercies
    self.primary_key = :lesson_id


    def get_lessons_by_topic(topic_id)
        return Lesson.where(topic_id: topic_id).order(order_index: :asc)
    end
end
