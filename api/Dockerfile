# Specify base image 
FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm i 
COPY ./ ./

# Default command
CMD ["npm", "run", "start"]