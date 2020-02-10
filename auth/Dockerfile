# Specify base image 
FROM node:alpine

WORKDIR /usr/app

# ARG jwt
# ARG mail_password
# ARG db_password

ENV FAR_JWT_PRIVATEKEY=${jwt}
ENV FAR_MAIL_PASSWORD=${mail_password}
ENV FAR_DB_PASSWORD=${db_password}

COPY package*.json ./
RUN npm i 
COPY ./ ./

# Default command
CMD ["npm", "run", "start"]