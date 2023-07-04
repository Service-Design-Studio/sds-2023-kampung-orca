# Kampung.SG Forum Service

## Local Development

### Testing

```sh
# Create: Create a new lesson.
curl -X POST -H "Content-Type: application/json" -d '{ "lesson": { "title": "New Lesson Title" } }' http://localhost:3000/lessons

# Read (Index): Retrieve all lessons.
curl http://localhost:3000/lessons

# Read (Show): Retrieve a specific lesson by its ID.
curl http://localhost:3000/lessons/:id

# Update: Update an existing lesson with a specific ID.
curl -X PATCH -H "Content-Type: application/json" -d '{ "lesson": { "title": "Updated Lesson Title" } }' http://localhost:3000/lessons/:id

# Delete: Delete a lesson with a specific ID.
curl -X DELETE http://localhost:3000/lessons/:id
```
