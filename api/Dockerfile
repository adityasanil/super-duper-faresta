FROM node:alpine

WORKDIR /usr/app

ARG JWT
ARG MAIL
ARG DB
ARG ACCESS
ARG SECRET

ENV FAR_JWT_PRIVATEKEY ${JWT}
ENV FAR_MAIL_PASSWORD ${MAIL}
ENV FAR_DB_PASSWORD ${DB}
ENV FAR_AWS_ACCESSKEY_ID ${ACCESS}
ENV FAR_AWS_SECRETKEY ${SECRET}

COPY ./package*.json ./
RUN npm install 
COPY ./ ./

CMD ["npm", "run", "start"]