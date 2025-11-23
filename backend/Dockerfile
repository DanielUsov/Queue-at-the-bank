FROM node:22.3.0

WORKDIR /usr/src/app/
RUN mkdir -p dist

COPY ./dist ./dist/
COPY .env ./
COPY package*.json ./

RUN npm ci 

EXPOSE 3002

CMD ["sh", "-c", "npm run prod"]
