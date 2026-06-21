FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG VITE_API_BASE_URL=/api
ARG VITE_SITE_URL=https://studio-carlu-styles.vercel.app
ARG VITE_WHATSAPP_URL=https://wa.me/5583981580195?text=Ol%25C3%25A1%252C+gostaria+de+agendar+um+hor%25C3%25A1rio%2521+
ARG VITE_INSTAGRAM_URL=https://www.instagram.com/studio_carlustyles?igsh=bjZyOWFqdW80cm9j
ARG VITE_GOOGLE_MAPS_URL=https://maps.app.goo.gl/TzdoJmZgWnTHzkNh9?g_st=ic

ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_SITE_URL=$VITE_SITE_URL
ENV VITE_WHATSAPP_URL=$VITE_WHATSAPP_URL
ENV VITE_INSTAGRAM_URL=$VITE_INSTAGRAM_URL
ENV VITE_GOOGLE_MAPS_URL=$VITE_GOOGLE_MAPS_URL

RUN npm run build

FROM node:24-alpine AS runtime

WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/dist ./dist

EXPOSE 4173
CMD ["sh", "-c", "serve -s dist -l tcp://0.0.0.0:${PORT:-4173}"]
