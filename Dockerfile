FROM node:16.17.1-alpine3.15

WORKDIR /nest

# cross-env 启动环境变量丢失
ENV node_env production

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:env-prod"]

# docker build -t {image_name}:{image_tag} . 
# docker run -d --name {container_name} -p {host_port}:{docker_port} {image_name}:{image_tag}