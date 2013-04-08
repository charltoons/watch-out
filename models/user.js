var dbObj = require('mongojs');
var db    = null;
var dbURL = process.env.DB_USER + ':' +
			process.env.DB_PASS + '@' +
			process.env.DB_HOST + ':' +
			process.env.DB_PORT + '/' +
			process.env.DB_NAME;

db = dbObj.connect(dbURL, ['users']);
db.users.findOne(function(error, data){
	if (error) {
		console.error('ERROR connecting to the database.');
	}
	else {
		console.log('Connected to the database');
	}
});