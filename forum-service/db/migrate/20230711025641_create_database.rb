# db/migrate/20230711093500_create_initial_schema.rb
class CreateDatabase < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: :string, primary_key: :user_id, force: :cascade do |t|
      t.string :name
      t.string :email
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end

    create_table :lessons, force: :cascade do |t|
      t.string :title
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end

    create_table :posts, force: :cascade do |t|
      t.string :title
      t.text :content
      t.string :user_id, null: false
      t.integer :lesson_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end

    create_table :comments, force: :cascade do |t|
      t.text :content
      t.integer :post_id, null: false
      t.string :user_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end

    add_index :users, :user_id, unique: true
    add_index :posts, :user_id
    add_index :posts, :lesson_id
    add_index :comments, :post_id
    add_index :comments, :user_id
    add_index :lessons, :lesson_id

    add_foreign_key :posts, :users, column: :user_id, primary_key: :user_id
    add_foreign_key :posts, :lessons
    add_foreign_key :comments, :posts
    add_foreign_key :comments, :users, column: :user_id, primary_key: :user_id
  end
end
