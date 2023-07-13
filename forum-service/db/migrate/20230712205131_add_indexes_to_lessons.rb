class AddIndexesToLessons < ActiveRecord::Migration[7.0]
  def change
    add_index :lessons, :lesson_id
  end
end
