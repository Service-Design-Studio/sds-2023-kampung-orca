# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Lesson.create([{ title: "Lesson 1"}, { title: "Lesson 2"}])
User.create([{ name: "Matt", email: "danny@gmail.com", user_id: "1" }, { name: "Mohammad", email: "mohi@gmail.com", user_id: "2" },
{ name: "Aloysius", email: "aloy@gmail.com", user_id: "3" },{ name: "Thomas", email: "thomas@gmail.com", user_id: "admin" } ])
Post.create([{ title: "Hello People 1", content: "I am saying hi 1", user_id: "1", lesson_id: 1 }])
Post.create([{ title: "Hello People 1 in L2", content: "I am saying hi 1 in L2", user_id: "1", lesson_id: 2 }])
Post.create([{ title: "Hihi in L1", content: "Moha saying hi 1 in L1", user_id: "2", lesson_id: 1 }])
Comment.create([{ content: "yoyo", post_id: 1, user_id: "2" }])
Post.create([{ title: "Hihi in L1", content: "Moha saying hi 1 in L1", user_id: "2", lesson_id: 1 }])
Post.create([{ title: "Curious about Christianity", content: "What questions do you have?", user_id: "2", lesson_id: 1 }])
Comment.create([{ content: "I want to know more!", post_id: 5, user_id: "3" }])