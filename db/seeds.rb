# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Topic.destroy_all
Lesson.destroy_all
Page.destroy_all
Exercise.destroy_all

Topic.create!(topic_id: "00001", title: "help", num_of_lessons: 1)
Lesson.create!(lesson_id: "00001", topic_id: "00001", order_index: 0, title: "help")
Lesson.create!(lesson_id: "00002", topic_id: "00001", order_index: 1, title: "help2")
qns = ["dasdasda","asdadsadsad"]
Exercise.create!(exercise_id: "00001", topic_id: "00001", lesson_id: "00001", title: "help", qns: qns)
#ExerciseContent.create!(exercise_id: "00002", title: "help", qns: str.to_s)
#ExerciseList.create!(exercise_id: "00002", topic_id: "00001", lesson_id: "00001")
9.times do |i|
    Page.create!(page_id: "0000%d" % [i], lesson_id: "00001", order_index: i, video: "http://", words: "help")
    
  end
  p "Created #{Page.count} pages"
