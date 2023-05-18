FROM node:20-alpine3.17
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]