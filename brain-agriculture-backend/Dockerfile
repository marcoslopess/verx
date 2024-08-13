# Dockerfile
FROM node:21-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

CMD ["sh", "-c", "npm run ${NODE_ENV}"]
