FROM node:latest

WORKDIR /nest

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]

# docker build -t {image_name}:{image_tag} . 
# docker run -d --name {container_name} -p {host_port}:{docker_port} {image_name}:{image_tag}