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
