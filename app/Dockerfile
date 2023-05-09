FROM node:14.5.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN npm install -g --silent && npm install react-scripts@3.4.1 -g --silent

CMD ["npm", "start"]