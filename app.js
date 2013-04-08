
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , website = require('./routes/website')
  , http = require('http')
  , passport = require('passport')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', authenticate, routes.index);
app.post('/login', authenticate, routes.index);

//CRUD User
app.post('/user', authenticate, user.create);
app.get('/:username', authenticate, user.read);
app.put('/:username', authenticate, user.update);
app.delete('/:username', authenticate, user.remove);

//C/D Website
app.post('/:username/website', authenticate, user.create);
app.delete('/:username/:websiteID', authenticate, user.remove);

http.createServer(app).listen(app.get('port'), function(){
  console.log("WATCH OUT is rockin' and rollin' on " + app.get('port'));
});


function authenticate(req, res, next){
  next();
}