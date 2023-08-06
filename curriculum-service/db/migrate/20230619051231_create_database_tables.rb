class CreateDatabaseTables < ActiveRecord::Migration[6.1]
  def change
    create_table :lessons, id: false, primary_key: :lesson_id do |t|
      t.text :lesson_id, null: false, index: { unique: true }
      t.text :topic_id
      t.string :title
      t.integer :order_index
    end

    create_table :topics, id: false, primary_key: :topic_id do |t|
      t.text :topic_id, null: false, index: { unique: true }
      t.string :title
    end

    create_table :pages, id: false, primary_key: :page_id do |t|
      t.text :page_id, null: false, index: { unique: true }
      t.text :lesson_id
      t.integer :order_index
      t.string :video
      t.string :words
    end
    
  end
end
