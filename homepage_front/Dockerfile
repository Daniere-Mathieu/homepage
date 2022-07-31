FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
COPY . ./app
RUN npm install --force
EXPOSE 8080
CMD [ "npm", "run" ,"serve"]