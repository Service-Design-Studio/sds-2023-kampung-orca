# Kampung.SG Users Service

## Local Development

```sh
bundle install --without production

# Initialise db
rails db:drop db:migrate db:seed

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

```text
/user/{id}: [Get, Show, Destroy]
returns user details with id

Post /user/authorization_code_exchange
input: auth code from google
calls google to exahnge for access token and refresh token
gets user profile from google using access token
stores user and tokens in database
output: access token, user_id, name, email

Post /user/verify_token
input: access token
verifies token in database, refreshes if expires
output: access token, user_id

Get /user/profile
input: access token
output: user_id, users' profile details
```
