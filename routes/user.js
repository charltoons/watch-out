var user = require('../models/user');

function create(req, res){
	var newUser = {
		username:  req.body.username,
		full_name: req.body.full_name,
		email:     req.body.email,
		password:  req.body.password
	};
	user.addUser(newUser, function(error, data){
		if (error) {
			res.redirect('/');
			console.error('Error creating user');
		}
		else {
			res.redirect('/'+newUser.username);
			console.log('created new user '+newUser.username);
		}
	});
}

function read(req, res){
	var page = {};
	page.username = req.params.username;
	res.render('user', page);
}

function update(req, res){
	res.render('index');
}

function remove(req, res){
	res.render('index');
}

exports.create = create;
exports.read   = read;
exports.update = update;
exports.remove = remove;