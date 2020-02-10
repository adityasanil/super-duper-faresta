FROM node:alpine

WORKDIR /usr/app

ARG JWT
ARG MAIL
ARG DB

ENV FAR_JWT_PRIVATEKEY ${JWT}
ENV FAR_MAIL_PASSWORD ${MAIL}
ENV FAR_DB_PASSWORD ${DB}

COPY ./package*.json ./
RUN npm install 
COPY ./ ./

CMD ["npm", "run", "start"]