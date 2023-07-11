class CreateDatabaseTables < ActiveRecord::Migration[6.1]
  def change
    create_table :lessons, id: false, primary_key: :lesson_id do |t|
      t.integer :lesson_id, null: false, index: { unique: true }
      t.integer :topic_id
      t.string :title
      t.integer :order_index
    end

    create_table :exercises, id: false, primary_key: :exercise_id do |t|
      t.integer :exercise_id, null: false, index: { unique: true }
      t.integer :topic_id
      t.integer :lesson_id
      t.string :title
      t.string :qns
    end

    create_table :topics, id: false, primary_key: :topic_id do |t|
      t.integer :topic_id, null: false, index: { unique: true }
      t.string :title
      t.integer :num_of_lessons
    end

    create_table :pages, id: false, primary_key: :page_id do |t|
      t.integer :page_id, null: false, index: { unique: true }
      t.integer :lesson_id
      t.integer :order_index
      t.string :video
      t.string :words
    end
    create_table :users, id: false, primary_key: :user_id do |t|
      t.string :user_id, null: false, index: { unique: true }
      t.string :lessons_access
      t.string :exercises_access
    end
  end
end
