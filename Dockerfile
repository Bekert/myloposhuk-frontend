FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm run prepare

COPY . .

RUN npm run build

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
