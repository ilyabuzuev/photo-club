FROM node:22.11.0-alpine3.20 AS build
WORKDIR /app
COPY package.json package-lock.json ./
#RUN npm config set registry https://registry.npmmirror.com/
#RUN npm install
RUN npm install --verbose
COPY . .
ENV DATABASE_URL=postgresql://admin:admin@db:5432/photoclub
RUN npx prisma generate
#RUN npx prisma migrate deploy
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]