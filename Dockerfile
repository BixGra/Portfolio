# Builder

FROM node:20-alpine AS builder

RUN npm install -g serve --prefix /usr/local/serve

WORKDIR /app

COPY package.json ./

RUN npm install --verbose

COPY . .

RUN npm run build 

# Production

FROM node:20-alpine AS production

RUN npm install -g serve --verbose

COPY --from=builder /app/build/client ./

EXPOSE 3000

CMD ["/usr/local/bin/serve", "-s", "-l", "3000"]