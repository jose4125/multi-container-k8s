FROM node:14.14.0-alpine
WORKDIR /usr/app
ENV NODE_ENV=production
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
COPY . .
HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost/ || exit 1
USER node
CMD ["npm", "start"]
