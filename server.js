var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

// create some middleware
var middleware = require('./middleware.js');

// middleware can be applied to a specific route (like the /about route below), or at the application level.
// use it...
app.use(middleware.logger);

// get usage: route, middleware, callback
app.get('/about', middleware.requireAuthentication, function(req, res) {
  res.send('About Us');
});

// define public directory
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
  console.log('Express server started on port ' + PORT + '...');
});