FROM node:16-alpine as base
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .

FROM base as production
ENV NODE_PATH=./dist
RUN yarn run build

EXPOSE 3889
CMD ["node", "dist/server.js"]