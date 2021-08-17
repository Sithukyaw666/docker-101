FROM node:16-alpine AS client
# copy file under client dir to under app dir
COPY client/ /app/  
# set workdir to under app dir
WORKDIR /app/
RUN yarn install
RUN yarn build


FROM node:16-alpine 
COPY server/ /web/
WORKDIR /web/
RUN npm install -y
# this is the art of multistage this copy the build dir from previous stage to ./dir
COPY --from=client /app/build ./build
ENTRYPOINT [ "npm","start" ]
