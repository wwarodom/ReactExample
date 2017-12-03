# Flight database
This is a very simple react application that reads APIs (nodejs) with the axios library

Install required packages:
* npm install

Run server side:
* create /server/config.js

```javascript
const config = {
	db_name: 'dev',
	db_user: 'user',
	db_password: 'secret',
	db_host: '10.0.0.1',
	db_dialect: 'mysql',
};
module.exports = config;
```

* import flight.sql to mysql server
* node /server/index.js   

Run react:
* npm start