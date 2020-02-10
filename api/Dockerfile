# Specify base image 
FROM node:alpine

WORKDIR /usr/app

ARG jwt
ARG mail_password
ARG db_password
ARG access_id
ARG secret_key

ENV FAR_JWT_PRIVATEKEY=${jwt}
ENV FAR_MAIL_PASSWORD=${mail_password}
ENV FAR_DB_PASSWORD=${db_password}
ENV FAR_AWS_ACCESSKEY_ID=${access_id}
ENV FAR_AWS_SECRETKEY=${secret_key}

COPY package*.json ./
RUN npm i 
COPY ./ ./

# Default command
CMD ["npm", "run", "start"]