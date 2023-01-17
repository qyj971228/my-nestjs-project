## Prepare Configuration
```bash
$ midkr ./src/config
$ touch mysql.ts redis.ts
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
# $ npm run start

# watch mode
# $ npm run start:dev

# watch mode && node_env = development
$ npm run start:env-dev

# production mode
# $ npm run start:prod

# production mode && node_env = production
$ npm run start:env-prod
```