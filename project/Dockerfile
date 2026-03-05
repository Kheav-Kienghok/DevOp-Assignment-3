FROM node:18

WORKDIR /app

COPY project/package*.json ./

RUN npm install

COPY project .

EXPOSE 3000

CMD ["node", "index.js"]
