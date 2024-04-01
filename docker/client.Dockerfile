# pull official base image
FROM registry.cn-hangzhou.aliyuncs.com/apitool/node:18.18.2-buster

ENV NODE_ENV=development

RUN npm i -g npm@9.8.1

# set working directory
WORKDIR /app

COPY ./package.json ./package.json

# add `/app/frontend/node_modules/.bin` to $PATH
ENV PATH /app/frontend/node_modules/.bin:$PATH

# Fix for heap limit allocation issue
ENV NODE_OPTIONS="--max-old-space-size=4096"

# install app dependencies
COPY ./frontend/package.json ./frontend/package-lock.json ./frontend/
RUN npm --prefix frontend install
COPY ./frontend/ ./frontend/

# start app
CMD ["npm", "--prefix", "frontend", "start"]

EXPOSE 8082
