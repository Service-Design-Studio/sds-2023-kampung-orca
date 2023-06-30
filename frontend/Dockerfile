FROM node:14-slim

WORKDIR /frontend
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD [ "serve", "-s", "-l", "3000", "./build" ]