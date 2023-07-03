# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# REQUESTS IF YOU WANNA DEMO IN COMMAND LINE

curl -X POST -H "Content-Type: application/json" -d "{\"post\":{\"title\":\"Jopping\", \"content\":\"Uh you think ya big boy throwing  3 stacks\"}}" http://localhost:3000/posts

curl -X GET http://localhost:3000/posts

curl -X GET http://localhost:3000/posts/2

curl -X PATCH -H "Content-Type: application/json" -d "{\"post\":{\"title\":\"Stan Loona\", \"content\":\"Jop like a butterfly\"}}" http://localhost:3000/posts/2

curl -X DELETE http://localhost:3000/posts/1


curl -X POST -H "Content-Type: application/json" -d "{\"comment\":{\"content\":\"My kidney is pounding\, \"post_id\":2}}" http://localhost:3000/posts/2/comments

curl -X GET http://localhost:3000/posts/2/comments

curl -X PATCH -H "Content-Type: application/json" -d "{\"comment\":{\"content\":\"Love is cruel like college entrance exams\", \"post_id\",:2}}" http://localhost:3000/posts/2/comments/3

curl -X DELETE http://localhost:3000/posts/2/comments/3





