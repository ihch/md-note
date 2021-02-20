FROM node:14.15.5-alpine

WORKDIR /app

# パッケージに変更があったときにインストールのcacheが更新される
COPY package.json /app/package.json
RUN yarn

# アプリケーションに変更があったときにcacheが更新される
COPY . /app/
RUN yarn build

CMD ["yarn", "start"]
