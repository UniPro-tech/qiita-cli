FROM oven/bun:1 AS builder

WORKDIR /app

COPY . .

RUN bun install

RUN bun run --bun build

FROM httpd:alpine

COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/

# 404 page
RUN echo 'ErrorDocument 404 /index.html' >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80