# Kampung.SG

Interfaith LMS Project in collaboration with Being Bridges and Google

## Local Development

It is highly recommended to install [`volta`](https://volta.sh/) for Node and Yarn versioning.

```sh
# Volta installation
curl https://get.volta.sh | bash
volta install node
volta install yarn

bundle install # Install gems
yarn # Install node packages
./bin/dev
```

## Deployment

```sh
gcloud init
gcloud builds submit
```

This should be replaced by CI on main branch in the future.

## Component Library

This project uses [Chakra UI](https://chakra-ui.com/) for its components.

## Linting

This project uses Rubocop for its linting.

```sh
gem install rubocop
rubocop app
```

## TODO

- Github CI
- Configuration and dependencies
- Database
- Test suite
