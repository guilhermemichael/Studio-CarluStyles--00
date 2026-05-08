FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG VITE_API_BASE_URL=/api
ARG VITE_WHATSAPP_NUMBER=
ARG VITE_INSTAGRAM_URL=https://www.instagram.com/studio_carlustyles
ARG VITE_GOOGLE_MAPS_URL=

ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_WHATSAPP_NUMBER=$VITE_WHATSAPP_NUMBER
ENV VITE_INSTAGRAM_URL=$VITE_INSTAGRAM_URL
ENV VITE_GOOGLE_MAPS_URL=$VITE_GOOGLE_MAPS_URL

RUN npm run build

FROM node:24-alpine AS runtime

WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/dist ./dist

EXPOSE 4173
CMD ["sh", "-c", "serve -s dist -l tcp://0.0.0.0:${PORT:-4173}"]
