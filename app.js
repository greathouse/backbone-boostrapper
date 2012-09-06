var http = require('http');
var express = require('express');

var express = require('express');
var app = express();
app.configure(function() {
	app.use(express.logger({format: ':method :url'}));
	app.use(express.methodOverride()); //Add a hidden "_method" field to forms to override "POST"; ie: "PUT" & "DELETE"
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({ secret: 'keyboard cat' }));
	app.use(app.router);
	app.use('/', express.static(__dirname + '/web'));
	app.use(function(err, req, res, next){
		console.error(err.stack);
		res.send(500, 'Something Broke!');
	});	
	
});

app.listen(process.env.VCAP_APP_PORT || 3000);