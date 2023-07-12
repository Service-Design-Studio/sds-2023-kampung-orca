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

Topic.create!(topic_id: "1", title: "Sample Topic 1", num_of_lessons: 3)
Topic.create!(topic_id: "2", title: "Sample Topic 2", num_of_lessons: 3)
Topic.create!(topic_id: "3", title: "Sample Topic 2", num_of_lessons: 3)
Topic.create!(topic_id: "4", title: "Sample Topic 4", num_of_lessons: 3)
Topic.create!(topic_id: "5", title: "Sample Topic 5", num_of_lessons: 3)
Lesson.create!(lesson_id: "1", topic_id: "1", order_index: 0, title: "Lesson 1")
Lesson.create!(lesson_id: "2", topic_id: "1", order_index: 1, title: "Lesson 2")
Lesson.create!(lesson_id: "3", topic_id: "1", order_index: 2, title: "Lesson 3")
qns = ["sample_qn 1","sample_qn 2"]
Exercise.create!(exercise_id: "1", topic_id: "1", lesson_id: "1", title: "Sample Exercise 1", qns: qns)
#ExerciseContent.create!(exercise_id: "00002", title: "help", qns: str.to_s)
#ExerciseList.create!(exercise_id: "00002", topic_id: "00001", lesson_id: "00001")
Page.create!(page_id:'1', lesson_id: '1', order_index: 0, video: 'https://www.youtube.com/embed/QWTv8NbItt0', words: 'These are the sample words for sample lesson 1, at page 1. The video on the right shows a short film on how we can embrace diversity and inclusion.')
Page.create!(page_id:'2', lesson_id: '2', order_index: 0, video: 'https://www.youtube.com/embed/_vtuEcwLgTU', words: 'These are the sample words for sample lesson 2. The video on the right shows how we can incorporate gratitude into our lives, particularly during difficult periods such as COVID-19 times.')
Page.create!(page_id:'3', lesson_id: '3', order_index: 0, video: 'https://www.youtube.com/embed/d3IDvqZrDUo', words: 'These are the sample words for sample lesson 3. The video on the right shows how hope is important, and we teach it as part of our programme, "A Dose of Spirituality".')
Page.create!(page_id:'4', lesson_id: '1', order_index: 1, video: 'https://www.youtube.com/embed/QWTv8NbItt0', words: 'These are the sample words for sample lesson 1, at page 2. The video on the right shows how hope is important, and we teach it as part of our programme, "A Dose of Spirituality".')
Page.create!(page_id:'5', lesson_id: '1', order_index: 2, video: 'https://www.youtube.com/embed/_vtuEcwLgTU', words: 'These are the sample words for sample lesson 2, at page 3. The video on the right shows how we can incorporate gratitude into our lives, particularly during difficult periods such as COVID-19 times.')
Page.create!(page_id:'6', lesson_id: '2', order_index: 1, video: 'https://www.youtube.com/embed/d3IDvqZrDUo', words: 'These are the sample words for sample lesson 3. The video on the right shows how hope is important, and we teach it as part of our programme, "A Dose of Spirituality".')

p "Created #{Page.count} pages"
