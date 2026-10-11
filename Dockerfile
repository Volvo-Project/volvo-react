# ---------- Etapa 1: construir la app ----------
FROM node:24-alpine AS build
WORKDIR /app

# Primero solo las dependencias, para que Docker reutilice esta capa
# si únicamente cambia el código.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- Etapa 2: servir con nginx ----------
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
