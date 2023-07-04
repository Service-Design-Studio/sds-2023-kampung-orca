class AddLessonIdToPosts < ActiveRecord::Migration[7.0]
  def change
    add_reference :posts, :lesson, null: false, foreign_key: true
  end
end
