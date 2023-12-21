# ----------------------------
# build from source
# ----------------------------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

# ----------------------------
# run with nginx
# ----------------------------
FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build /app/dist/weather-app/browser /usr/share/nginx/html

EXPOSE 80

# Example to rum without docker compose
# docker build -t weather-spa .
# docker run -d -p 8080:80 weather-spa
