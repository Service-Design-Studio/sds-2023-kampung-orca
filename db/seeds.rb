# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Topic.destroy_all
LessonList.destroy_all
PageList.destroy_all
PageContent.destroy_all

Topic.create!(topic_id: "00001", title: "help", num_of_lessons: 1)
puts Topic.all
LessonList.create!(lesson_id: "00001", topic_id: "00001", order_index: 1)

9.times do |i|
    PageList.create!(page_id: "0000%d" % [i], lesson_id: "00001", order_index: i)
    PageContent.create!(page_id: "0000%d" % [i], video: "http://", words: "help")
  end
  p "Created #{PageContent.count} pages"
