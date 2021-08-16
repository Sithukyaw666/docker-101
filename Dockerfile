FROM node:14.5.0-alpine AS client
WORKDIR /app/
COPY client/ app/
RUN yarn install
RUN yarn build


FROM node:14.5.0-alpine 
WORKDIR /web/
COPY server/ web/
RUN npm install -y
COPY --from=client /app/build ./build
ENTRYPOINT [ "npm","start" ]
