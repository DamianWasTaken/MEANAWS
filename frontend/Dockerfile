FROM node:latest as build
WORKDIR /usr/Documents/me/self-pro
COPY ./ /usr/Documents/me/self-pro
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/Documents/me/self-pro/dist/frontend /usr/share/nginx/html
EXPOSE 81