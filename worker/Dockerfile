
FROM node:alpine
WORKDIR /usr/app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install
COPY . .
HEALTHCHECK --interval=5m --timeout=3s \
  CMD redis-cli ping
USER node
CMD ["npm", "start"]
