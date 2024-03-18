FROM node:20.11.1 as build

ARG COMMIT_SHA
ENV APP_VERSION=$COMMIT_SHA

# Create app directory
WORKDIR /src
# Required files are whitelisted in dockerignore
COPY . ./
RUN npm ci && npm run build && npm prune --production

FROM nginx:1.25.4-alpine3.18

COPY nginx.conf /etc/nginx/conf.d/CSR.conf
COPY --from=build /src/dist /usr/share/nginx/html

EXPOSE 80
