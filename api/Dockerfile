FROM node:15.3.0-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

#EXPOSE 3000
#CMD ["node", "run start"]