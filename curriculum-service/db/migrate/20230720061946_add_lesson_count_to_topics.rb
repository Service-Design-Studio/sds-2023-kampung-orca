class AddLessonCountToTopics < ActiveRecord::Migration[7.0]
  def change
    add_column :topics, :lessons_count, :integer
  end
end
