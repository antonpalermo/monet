FROM node:current-alpine

WORKDIR /usr/app

COPY package.json .

RUN npm i --omit=dev

RUN chown -R node: /usr/app

COPY . .

EXPOSE 3000

USER node

CMD [ "npm", "start" ]
