# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_03_090425) do
  create_table "entries", id: false, force: :cascade do |t|
    t.text "entry_id", null: false
    t.string "user_answer"
    t.string "ml_answer"
    t.integer "exercise_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["entry_id"], name: "index_entries_on_entry_id", unique: true
    t.index ["exercise_id"], name: "index_entries_on_exercise_id"
    t.index ["user_id"], name: "index_entries_on_user_id"
  end

  create_table "exercises", id: false, force: :cascade do |t|
    t.text "exercise_id", null: false
    t.text "topic_id"
    t.text "lesson_id"
    t.string "title"
    t.string "qns"
    t.index ["exercise_id"], name: "index_exercises_on_exercise_id", unique: true
  end

  create_table "lessons", id: false, force: :cascade do |t|
    t.text "lesson_id", null: false
    t.text "topic_id"
    t.string "title"
    t.integer "order_index"
    t.string "message"
    t.index ["lesson_id"], name: "index_lessons_on_lesson_id", unique: true
  end

  create_table "pages", id: false, force: :cascade do |t|
    t.text "page_id", null: false
    t.text "lesson_id"
    t.integer "order_index"
    t.string "video"
    t.string "words"
    t.json "sections"
    t.index ["page_id"], name: "index_pages_on_page_id", unique: true
  end

  create_table "topics", id: false, force: :cascade do |t|
    t.text "topic_id", null: false
    t.string "title"
    t.integer "lessons_count"
    t.index ["topic_id"], name: "index_topics_on_topic_id", unique: true
  end

  create_table "users", id: false, force: :cascade do |t|
    t.string "user_id", null: false
    t.string "lessons_access"
    t.string "exercises_access"
    t.index ["user_id"], name: "index_users_on_user_id", unique: true
  end

  add_foreign_key "entries", "exercises"
  add_foreign_key "entries", "users"
end
