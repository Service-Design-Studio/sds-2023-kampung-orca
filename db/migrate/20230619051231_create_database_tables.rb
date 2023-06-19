class CreateDatabaseTables < ActiveRecord::Migration[6.1]
  def change
    create_table :lesson_lists do |t|
      t.string :lesson_id
      t.string :topic_id
      t.integer :order_index
    end

    create_table :lesson_contents do |t|
      t.string :lesson_id
      t.string :title
    end

    create_table :exercise_lists do |t|
      t.string :exercise_id
      t.string :topic_id
      t.string :lesson_id
    end

    create_table :exercise_contents do |t|
      t.integer :exercise_id
      t.string :title
      t.string :qns
    end

    create_table :topics do |t|
      t.integer :topic_id
      t.string :title
      t.integer :num_of_lessons
    end

    create_table :page_lists do |t|
      t.integer :page_id
      t.integer :lesson_id
      t.integer :order_index
    end

    create_table :page_contents do |t|
      t.integer :page_id
      t.string :video
      t.string :words
    end
  end
end
