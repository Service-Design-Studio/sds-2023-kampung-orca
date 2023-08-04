class CreateEntries < ActiveRecord::Migration[7.0]
  def change
    create_table :entries, id: false do |t|
      t.text :entry_id, null: false, index: { unique: true }, primary_key: true
      t.string :user_answer
      t.string :ml_answer

      t.string :user_id   
      t.text :exercise_id 

      t.timestamps
    end
    add_foreign_key :entries, :users, column: :user_id, primary_key: :user_id

    add_foreign_key :entries, :exercises, column: :exercise_id, primary_key: :exercise_id
  end
end
