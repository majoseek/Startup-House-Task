# Startup-House-Task
Time Tracking API\
Author: Mateusz Maj
## Getting started
To try app locally make sure you have got docker desktop installed and run these commands:\
```
docker build -t startuphouse-task .
docker-compose up -d
```
## User stories
* GET ```/api```
Gets current tracking task
* POST ```/api```
Stops previously tracked task and sets new one
* PUT ```/api```
Stops tracking task
## Used technologies and tools
* Typescript
* Node.js
* Express.js
* PostgreSQL
* Docker
* Postman
