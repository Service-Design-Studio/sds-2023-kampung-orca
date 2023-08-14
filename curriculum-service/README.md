# Kampung.SG Curriculum Service

## Local Development

```sh
bundle install --without production

# Initialise db
rails db:drop
rails db:migrate
rails db:seed

rails s
```

## Deploying

```sh
# Deploying as production
gcloud builds submit
```

## Linting

This project uses Rubocop for its linting.

```sh
gem install rubocop # Already included in Gemfile
rubocop app
```


## Routes

```sh
/lesson: Index, Create, Destroy, Show
/topic: Index, Create, Destroy, Show
/page: Index, Create, Destroy, Show
/exercise: Index, Create, Destroy, Show
/entry: Index, Create, Update, Destroy, Show
/user: Create

/topic/{topic_id}/lesson/show_lessons: get lessons with user's lesson access
input: user_id
output: topic's lessons, list of lessons that the user have access to

/lesson/{lesson_id}/lesson_completed: adds the next lesson and exercise to the user lessons access
input: user_id
output: previous and next lesson id, topic id of lesson

/lesson/{lesson_id}/show_pages: shows pages related to the lesson, ordered by index column
output: list of pages of the lessons

/lesson/{lesson_id}/show_exercise: shows exercise related  to the lesson
output: exercise
```
