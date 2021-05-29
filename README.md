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
At the beginning I made some manual tests with Postman\
![get1](https://user-images.githubusercontent.com/52738844/120079105-c5318280-c0b2-11eb-958d-0040379deb26.PNG)
---
![post1](https://user-images.githubusercontent.com/52738844/120079112-c82c7300-c0b2-11eb-8854-e9d9efe2cf36.PNG)
---
![get2](https://user-images.githubusercontent.com/52738844/120079115-c9f63680-c0b2-11eb-86c5-804e577b5166.PNG)
---
![put1](https://user-images.githubusercontent.com/52738844/120079122-cd89bd80-c0b2-11eb-8ef8-c3f6f83a00ae.PNG)
---
![get3](https://user-images.githubusercontent.com/52738844/120079124-cf538100-c0b2-11eb-8273-5665e4cb499e.PNG)

### Automated testing
