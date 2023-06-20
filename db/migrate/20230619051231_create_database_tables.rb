class CreateDatabaseTables < ActiveRecord::Migration[6.1]
  def change
    create_table :lesson_lists, id: false, primary_key: :lesson_id do |t|
      t.string :lesson_id, unique: true
      t.string :topic_id
      t.integer :order_index
    end

    create_table :lesson_contents, primary_key: :lesson_id do |t|
      t.string :lesson_id, unique: true
      t.string :title
    end

    create_table :exercise_lists, primary_key: :exercise_id do |t|
      t.string :exercise_id, unique: true
      t.string :topic_id
      t.string :lesson_id
    end

    create_table :exercise_contents, primary_key: :exercise_id do |t|
      t.integer :exercise_id, unique: true
      t.string :title
      t.string :qns
    end

    create_table :topics, primary_key: :topic_id do |t|
      t.integer :topic_id, unique: true
      t.string :title
      t.integer :num_of_lessons
    end

    create_table :page_lists, primary_key: :page_id do |t|
      t.integer :page_id, unique: true
      t.integer :lesson_id
      t.integer :order_index
    end

    create_table :page_contents, primary_key: :page_id do |t|
      t.integer :page_id, unique: true
      t.string :video
      t.string :words
    end
  end
end
