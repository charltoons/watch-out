function create(req, res){
	res.redirect('/'+req.params.username);
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