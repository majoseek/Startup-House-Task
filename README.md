# Task Tracker
Time Tracking API
## Getting started
To try app locally make sure you have got docker desktop installed and run these commands:
```
docker build -t startuphouse-task .
docker-compose up -d
```
Server runs on port 3000, database runs on port 5432, all user stories are on ```/api``` endpoint
## User stories
* GET ```/api```
Gets currently tracking task
* POST ```/api```
Stops previously tracked task and sets new one
* PUT ```/api```
Stops tracking task
## Used technologies and tools
* Typescript
* Node.js
* Express.js
* PostgreSQL
* Sequelize
* Docker
* Postman
## Database
It contains 1 table named "tasks".
| id                 | description | start_time | end_time|
| ------------------ |:-----------:| :---------:| -------:|
| SERIAL PRIMARY KEY | varchar(50) | date       | date    |
