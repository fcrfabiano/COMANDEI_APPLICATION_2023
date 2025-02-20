FROM node:lts-alpine AS builder

WORKDIR /app
COPY . .

WORKDIR /app/SERVER
RUN npm install --arch=x64 --platform=linuxmusl sharp
RUN npm install && npm run build && rm -rf node_modules

WORKDIR /app/CLIENT
RUN npm install && npm run build && rm -rf node_modules

FROM node:lts-alpine

WORKDIR /app

RUN npm install --arch=x64 --platform=linuxmusl sharp

COPY --from=builder /app/SERVER/dist .
COPY --from=builder /app/CLIENT/dist ./public
COPY --from=builder /app/SERVER/doc ./public/doc

ENV HOST=0.0.0.0
ENV PORT=3001
ENV MONGOOSE=mongodb://comandei_db:27017/comandei

EXPOSE 3001

CMD ["node", "index.js"]