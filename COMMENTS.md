# API Customers

API desenvolvida em NodeJS e utilizando o bando de dados não relacional MongoDB.
Está API conta com validação de dados e utiliza a dependencia Sentry para poder monitora-la
quando estiver em ambiente de produção.

## Instalar dependencias

...
npm install ou yarn
...


## Configuração do .env

no arquivo .env configure as variaveis do caminho do banco e caso deseja utilizar o sentry, configura o DNS


## Executando (Modo de desenvolvimento)

...
npm run dev ou yarn dev
...


## Executando (Modo de produção)

...
npm run start ou yarn start
...


## Observação

Execute o docker compose para criar a imagem do banco. Caso queira sar ele tambem, execute ... docker-compose up ...


## Requests

...
GET /customers
GET /customers/:id
DELETE /customers/:id
PUT /customers/:id
POST /customers/
...

## Dependencias

- [Sentry](https://www.npmjs.com/package/@sentry/node)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [express-async-handler](https://www.npmjs.com/package/express-async-handler)
- [express-validation](https://www.npmjs.com/package/express-validation)
- [joi](https://www.npmjs.com/package/joi)
- [mongoose](https://mongoosejs.com/)
- [mongoose-sequence](https://www.npmjs.com/package/mongoose-sequence)
- [require-dir](https://www.npmjs.com/package/require-dir)
- [youch](https://www.npmjs.com/package/youch)


## Dependencias de desenvolvimento

- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-standard](https://www.npmjs.com/package/eslint-plugin-standard)
- [nodemon](https://github.com/remy/nodemon)
