FROM node:20-slim
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
RUN npm run build --production
RUN npm install -g serve
#EXPOSE 4200
#CMD [ "node", "index.js" ]
#CMD [ "serve", "-s build -p $PORT"]
CMD serve -s build -p $PORT
