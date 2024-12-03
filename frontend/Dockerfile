# Шаг 1: Билд приложения
FROM node:22.11.0-alpine3.20 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build-only

# Шаг 2: Раздача собранных файлов
FROM nginx:1.26-alpine3.20
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]