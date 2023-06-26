# Kampung.SG API Gateway

## Local Development

```sh
bundle install
rails assets:precompile

# Initialise db
rails db:drop
rails db:migrate
rails db:seed

rails serve
```

## Linting

This project uses Rubocop for its linting.

```sh
gem install rubocop # Already included in Gemfile
rubocop app
```
