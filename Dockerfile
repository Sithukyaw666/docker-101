FROM node:16-alpine AS client
COPY client/ /app/
WORKDIR /app/
RUN yarn install
RUN yarn build


FROM node:16-alpine 
COPY server/ /web/
WORKDIR /web/
RUN npm install -y
COPY --from=client /app/build ./build
ENTRYPOINT [ "npm","start" ]
