FROM node:16.17.0

WORKDIR /nest

RUN npm config set registry https://registry.npm.taobao.org

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

RUN rm -rf node_modules && rm package-lock.json

EXPOSE 3000

CMD ["npm", "run", "start"]

# docker build -t {image_name}:{image_tag} . 
# docker run -d --name {container_name} -p {host_port}:{docker_port} {image_name}:{image_tag}