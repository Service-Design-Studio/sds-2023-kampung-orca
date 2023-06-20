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

ActiveRecord::Schema[7.0].define(version: 20_230_619_051_231) do
  create_table 'exercises', id: false, force: :cascade do |t|
    t.integer 'exercise_id'
    t.integer 'topic_id'
    t.integer 'lesson_id'
    t.string 'title'
    t.string 'qns'
  end

  create_table 'lessons', id: false, force: :cascade do |t|
    t.integer 'lesson_id'
    t.integer 'topic_id'
    t.string 'title'
    t.integer 'order_index'
  end

  create_table 'pages', id: false, force: :cascade do |t|
    t.integer 'page_id'
    t.integer 'lesson_id'
    t.integer 'order_index'
    t.string 'video'
    t.string 'words'
  end

  create_table 'topics', id: false, force: :cascade do |t|
    t.integer 'topic_id'
    t.string 'title'
    t.integer 'num_of_lessons'
  end
end
