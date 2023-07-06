# Kampung.SG Forum Service

## Local Development

### Testing

#### Requests for Posts

```sh

# must specify user_id (lesson_id inferred from URL, as posts belong strictly to lessons)
curl -X POST -H "Content-Type: application/json" -d "{\"post\":{\"title\":\"Jopping\", \"content\":\"Uh you think ya big boy throwing 3 stacks\", \"user_id\": 1}}" http://localhost:3003/lessons/1/posts

curl -X GET http://localhost:3003/lessons/1/posts

curl -X GET http://localhost:3003/lessons/1/posts/2

curl -X PATCH -H "Content-Type: application/json" -d "{\"post\":{\"title\":\"Stan Loona\", \"content\":\"Jop like a butterfly\"}}" http://localhost:3003/lessons/1/posts/2

curl -X DELETE http://localhost:3003/lessons/1/posts/6

curl -X POST -H "Content-Type: application/json" -d "{\"comment\":{\"content\":\"My kidney is pounding\", \"user_id\":2}}" http://localhost:3003/lessons/1/posts/2/comments

curl -X GET http://localhost:3003/lessons/1/posts/2/comments

curl -X PATCH -H "Content-Type: application/json" -d "{\"comment\":{\"content\":\"Love is cruel like college entrance exams\", \"user_id\":2}}" http://localhost:3003/lessons/1/posts/2/comments/2

curl -X DELETE http://localhost:3003/lessons/1/posts/2/comments/2
```
#### Requests for Lessons

```sh
# Create: Create a new lesson.
curl -X POST -H "Content-Type: application/json" -d '{ "lesson": { "title": "New Lesson Title" } }' http://localhost:3003/lessons

# Read (Index): Retrieve all lessons.
curl http://localhost:3003/lessons

# Read (Show): Retrieve a specific lesson by its ID.
curl http://localhost:3003/lessons/:id

# Update: Update an existing lesson with a specific ID.
curl -X PATCH -H "Content-Type: application/json" -d "{\"lesson\":{\"title\":\"Updated Lesson Title\"}}" http://localhost:3003/lessons/:id

# Delete: Delete a lesson with a specific ID.
curl -X DELETE http://localhost:3003/lessons/:id
```
