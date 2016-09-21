var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	port = 5000 || process.env.PORT;

app.use(bodyParser.json());

app.post('/api/message', function(req, res){
	console.log(req.body);
	res.status(200);
});


app.listen(port, function(req,res){
	console.log('lynda_mean project back end server running')
});


