var express = require('express');
var app = express();
var PORT = 3000;

// By default it gets index.html
/*app.get('/',function(req, res) {
	res.send('Hello express');
});*/

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('about us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('express server started on ' + PORT)
});