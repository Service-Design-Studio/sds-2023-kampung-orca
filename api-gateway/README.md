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
