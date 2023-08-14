# Kampung.SG API Gateway

## Local Development

```sh
bundle install --without production

cp .env.example .env # Copy sample env file
nano .env # Edit the .env file accordingly
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
[Get, Post, Put, Patch, Delete]
'/lessons': forwards to forum service
'/posts': forwards to forum service
'/lessons/*': forwards to forum service
'/posts/*': forwards to forum service


Post /users/signup: forwards to user service, creates user for all services
Get /usrs/profile: forwards to user-service, returns user profile

Get /curriculum/*path: forwards to curriculum service
Post  /curriculum/*path: forwards to curriculum service


Post '/ml/review': forwards to ml service
Post '/ml/generate-comment': forwards to ml service

```
