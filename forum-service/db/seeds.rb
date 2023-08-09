# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


today = Time.zone.now.strftime("%Y-%m-%d %H:%M:%S")
three_days_ago = (Time.zone.now - 3.days).strftime("%Y-%m-%d %H:%M:%S")
five_days_ago = (Time.zone.now - 5.days).strftime("%Y-%m-%d %H:%M:%S")
four_days_ago = (Time.zone.now - 4.days).strftime("%Y-%m-%d %H:%M:%S")

Lesson.create([{ title: "Lesson 1"}, { title: "Lesson 2"}])
User.create([{ name: "Matt", email: "danny@gmail.com", user_id: "1" }, { name: "Mohammad", email: "mohi@gmail.com", user_id: "2" },
{ name: "Aloysius", email: "aloy@gmail.com", user_id: "3" },{ name: "Kampung Kaki", email: "kaki@gmail.com", user_id: "admin" } , {name:"Thomas", email:"thomas@gmail.com" , user_id: "4"}])
Post.create([{ title: "What are the most fun religious festivals?", content: "Give me your top 5. I would like to know about them to be able to hold better interfaith dialogue.", user_id: "3", lesson_id: 2 }])
Post.create([{ title: "Create some games for people to learn about interfaith.", content: "They can be board games or card games or video games.", user_id: "1", lesson_id: 2 }])
Post.create([{ title: "Why are we using English as the standard language of Singapore even though the national language is Malay?", content: "Is it colonialism?", user_id: "2", lesson_id: 1 }])
Comment.create([{ content: "I like Hari Raya!", post_id: 1, user_id: "2" }])
Post.create([{ title: "Curious about Christianity", content: "What questions do you have?", user_id: "4", lesson_id: 1 }])
Post.create([{ title: "Hi, I am new here.", content: "What can I learn with Kampung.sg?", user_id: "2", lesson_id: 1 , created_at: five_days_ago}])
Post.create([{ title: "What is the best way to approach interfaith dialogue?", content: "I'm not sure exactly how I should start. Would be good if someone led me in the right direction.", user_id: "3", lesson_id: 1 , created_at: five_days_ago}])
Comment.create([{ content: "I want to know more!", post_id: 5, user_id: "3" , created_at: four_days_ago}])
Comment.create([{ content: "I too am not sure about where to start with interfaith learning.", post_id: 7, user_id:3, created_at: three_days_ago}])
