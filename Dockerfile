FROM node:12-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

CMD ["yarn", "start:prod"]
