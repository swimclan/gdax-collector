FROM node:latest
WORKDIR /opt/node/gdax-collector
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "index.js" ]