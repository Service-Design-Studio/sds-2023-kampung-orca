# Kampung.SG Frontend

## Local Development

It is highly recommended to install [`volta`](https://volta.sh/) for Node versioning.

```sh
# Volta installation
curl https://get.volta.sh | bash
volta install node
npm install
```

`esbuild` is used for faster build times.

Copy `.env.example` into `.env` and edit **REACT_APP_GATEWAY_URL** with the base URL to the API Gateway.

```sh
# Dev server with file watching
npm start

# Build and serve
npm run build
npm i -g serve
serve -s build
```

## Component Library

This project uses [Chakra UI](https://chakra-ui.com/) for its components.
