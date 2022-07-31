FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --force && npm install --force -g nodemon
COPY . .
EXPOSE 3000
CMD [ "npm", "run" ,"dev"]