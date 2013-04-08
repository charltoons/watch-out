var dbObj = require('mongojs');
var db    = null;
var dbURL = process.env.DB_USER + ':' +
			process.env.DB_PASS + '@' +
			process.env.DB_HOST + ':' +
			process.env.DB_PORT + '/' +
			process.env.DB_NAME;

db = dbObj.connect(dbURL, ['users']);

//test the connection
db.users.findOne(function(error, data){
	if (error) {
		console.error('ERROR connecting to the database.');
	}
	else {
		console.log('Connected to the database');
	}
});

/*** Public Functions ***/
function addUser(newUser, next){
	db.users.insert(newUser, function(error, data){
		if (error) {
			console.error('DB ERROR '+error);
			next(true);
		}
		else { next(false, data); }
	});
}

function getUser(username, next){
	db.users.findOne({username:username}, function(error, data){
		if (error) {
			console.log('DB ERROR '+error);
			next(true);
		}
		else { next(false, data); }
	});
}

/*** exports ***/
exports.addUser = addUser;
exports.getUser = getUser;