FROM node:14.15.5-alpine

WORKDIR /app

ADD . /app

RUN yarn && yarn build

CMD ["yarn", "start"]
