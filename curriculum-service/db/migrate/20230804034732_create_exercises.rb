class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises, id: false do |t|
      t.text :exercise_id, null:false, index:{unique:true}, primary_key: true
      t.text :topic_id
      t.text :lesson_id
      t.string :title
      t.string :qns

      t.timestamps
    end
  end
end
