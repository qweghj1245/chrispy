From node:14.19.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY .npmrc package.json yarn.lock ./

ARG NODE_AUTH_TOKEN
RUN yarn install --frozen-lockfile

COPY . /usr/src/app

RUN echo $NODE_AUTH_TOKEN

RUN npm run build

EXPOSE 5000
CMD ["node", "./server/server.js"]
