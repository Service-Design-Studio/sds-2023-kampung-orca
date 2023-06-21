# Kampung.SG

Interfaith LMS Project in collaboration with Being Bridges and Google

## Local Development

It is highly recommended to install [`volta`](https://volta.sh/) for Node versioning.

### MacOS / Linux

```sh
# Volta installation
curl https://get.volta.sh | bash
volta install node

bundle install # Install gems
npm i # Install node packages
./bin/dev
```

### Windows

Use your preferred Node version manager e.g Volta, nvm, etc.

```bat
bundle install
npm i
cd bin
start.bat
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

Tasks outside of Jira to complete.

- Github CI
- Database
- Test suite
- Deployment
