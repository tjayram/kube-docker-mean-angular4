FROM node:6

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 11010

CMD ["npm", "start"]