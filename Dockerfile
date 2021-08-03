FROM node:14.17.0
WORKDIR /app
COPY ./package*.json ./
RUN ls -al
RUN npm install
CMD npm run start