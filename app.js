var express = require('express');
var bodyparser = require('body-parser');

app = express();

// APP CONFIG
app.set('view engine', 'pug');
app.use(express.static('views'));
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended: true}));

// ROUTES
app.get('/', function (req, res) {
	res.render('index'); 
});
app.get('/add', function (req, res) {
	res.render('add'); 
});
app.post('/add/submit', function (req, res) {
	// Process form submission
	console.log(req.body.name);
	res.redirect('/');
});
app.get('/edit', function (req, res) {
	res.render('edit'); 
});
app.get('/find', function (req, res) {
	res.render('index'); 
});
app.get('/destroy', function (req, res) {
	res.render('index'); 
});

// START SERVER
app.listen(3000, function(){
	console.log("The application server is now active!");
}); 
