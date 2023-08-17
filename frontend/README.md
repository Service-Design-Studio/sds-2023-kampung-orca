# Kampung.SG Frontend

## Local Development

**LINT BEFORE PUSHING YOUR CODE!**

It is highly recommended to install [`volta`](https://volta.sh/) for Node versioning.

```sh
# Volta installation
curl https://get.volta.sh | bash
volta install node
npm install # Install dependencies
```

`esbuild` is used for faster build times. Running `npm start` on WSL Bash is known to be slow, use Command Prompt on Windows instead.

Copy `.env.example` into `.env.development.local` and edit **REACT_APP_GATEWAY_URL** with the base URL to your deployment of the API Gateway e.g `http://localhost:3001`.

```sh
# Dev server with file watching
npm start

# Alternatively, build and serve
npm run build
npm i -g serve
serve -s build
```

## Testing

Cypress does not work well in WSL. Use your default OS environments when running Cypress.

```sh
# Runs a development instance
npm start
# ... Run microservice instances

# Open the Cypress instance
npx cypress open
```

For each operating system, run the corresponding script found in the root directory.

| Operating system | Script file       |
| ---------------- | ----------------- |
| WSL              | start_wsl_dev.bat |
| Windows          | start_dev.bat     |

## Component Library

This project uses [Chakra UI](https://chakra-ui.com/) for its components.
