class CreateEntries < ActiveRecord::Migration[7.0]
  def change
    create_table :entries, id: false, primary_key: :entry_id do |t|
      t.text :entry_id, null: false, index: { unique: true }
      t.string :user_answer
      t.string :ml_answer
      t.references :exercise, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
