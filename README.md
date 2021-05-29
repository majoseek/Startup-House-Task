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
* Docker
* Postman
## Database
It contains 1 table named "tasks".
| id                 | description | start_time | end_time|
| ------------------ |:-----------:| :---------:| -------:|
| SERIAL PRIMARY KEY | varchar(50) | date       | date    |

## Testing
For testing I used Postman tool
### Manual testing
### Automated testing
