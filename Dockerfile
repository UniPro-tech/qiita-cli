FROM oven/bun:2 AS builder

WORKDIR /app

COPY . .

RUN bun install

RUN bun run --bun build

FROM httpd:alpine

COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/

USER www-data

EXPOSE 80