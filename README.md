[![DIGITRO](https://media-exp1.licdn.com/dms/image/C4E0BAQHGyu1QYZOaPg/company-logo_200_200/0/1630954425205?e=1652313600&v=beta&t=6TQLoPKdNt2nHvnB6gf682ahwzaHhBz90OJyF-rmvqg)](https://media-exp1.licdn.com/dms/image/C4E0BAQHGyu1QYZOaPg/company-logo_200_200/0/1630954425205?e=1652313600&v=beta&t=6TQLoPKdNt2nHvnB6gf682ahwzaHhBz90OJyF-rmvqg)
## Rest API NodeJS
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Features
A small example of the Rest API model, implemented in this one:

- NodeJs
- Typescript
- MongoDB
- Express
- OOP
- MVC
- Docker
- HTTPS
- Others


## Installation with Docker

This application require [Docker](https://www.docker.com/) to run.

Install the dependencies and devDependencies and start the server with Docker.

```sh
cd digitro
docker-compose up
```

## Seeds Adding
To install the preview seeds, follow the steps:
```sh
docker exec api-nodejs-express npm run seed
npm run seed
```
The seed file is located in the root directory
```sh 
api-agents-registration/agents.json 
```
## Routes

`Prefix "/v1"`
| Method | Router |
| ------ | ------ |
| GET | [/healthy][PlG1] |
| DELETE | [/public/agents][PlD1] |
| GET | [/public/agents][PlG2] |
| POST | [/public/agents][PlG2] |
| GET | [/public/agents/{agentId}][PlG3] |
| PUT | [/public/agents/{agentId}][PlG3] |
| DELETE | [/public/agents/{agentId}][PlG3] |
| POST | [/auth][PlG3] |



   [PlG1]: <https://localhost:3000/v1/healthy>
   [PlD1]: <https://localhost:3000/v1/public/agents>
   [PlG2]: <https://localhost:3000/v1/public/agents>
   [PlG3]: <https://localhost:3000/v1/public/agents/>
   [PlG3]: <https://localhost:3000/v1/auth>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>