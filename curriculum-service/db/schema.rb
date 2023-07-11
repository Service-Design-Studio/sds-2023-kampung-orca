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

ActiveRecord::Schema[7.0].define(version: 2023_06_19_051231) do
  create_table "exercises", id: false, force: :cascade do |t|
    t.integer "exercise_id", null: false
    t.integer "topic_id"
    t.integer "lesson_id"
    t.string "title"
    t.string "qns"
    t.index ["exercise_id"], name: "index_exercises_on_exercise_id", unique: true
  end

  create_table "lessons", id: false, force: :cascade do |t|
    t.integer "lesson_id", null: false
    t.integer "topic_id"
    t.string "title"
    t.integer "order_index"
    t.index ["lesson_id"], name: "index_lessons_on_lesson_id", unique: true
  end

  create_table "pages", id: false, force: :cascade do |t|
    t.integer "page_id", null: false
    t.integer "lesson_id"
    t.integer "order_index"
    t.string "video"
    t.string "words"
    t.index ["page_id"], name: "index_pages_on_page_id", unique: true
  end

  create_table "topics", id: false, force: :cascade do |t|
    t.integer "topic_id", null: false
    t.string "title"
    t.integer "num_of_lessons"
    t.index ["topic_id"], name: "index_topics_on_topic_id", unique: true
  end

  create_table "users", id: false, force: :cascade do |t|
    t.string "user_id", null: false
    t.string "lessons_access"
    t.string "exercises_access"
    t.index ["user_id"], name: "index_users_on_user_id", unique: true
  end

end
