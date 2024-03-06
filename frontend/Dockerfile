FROM node:19.5.0-alpine3.17 AS build

ARG BACKGROUND_COLOR
ARG APP_NAME

WORKDIR /usr/src/app

COPY ./webapp/package*.json ./

RUN npm install

COPY ./webapp .

RUN npm run build

FROM nginx

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /usr/src/app/dist/webapp/browser /usr/share/nginx/html

COPY ./etc/app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
