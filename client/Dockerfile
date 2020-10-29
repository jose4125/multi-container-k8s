FROM node:alpine
WORKDIR /usr/app
ENV NODE_ENV=production
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
USER node

FROM nginx
EXPOSE 3000
HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost/ || exit 1
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /usr/app/build /usr/share/nginx/html
