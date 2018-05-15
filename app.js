var express = require('express');
app = express();

// Configure PUG view
app.set('view engine', 'pug');

// Configure file locations
app.use(express.static('views'));
app.use(express.static('public'));

// Routes
app.get('/', function (req, res) {
	res.render('index'); 
});

app.get('/add', function (req, res) {
	res.render('add'); 
});

app.post('/add/submit', function (req, res) {
	console.log('yeah i got something');
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

app.listen(3000, function(){
	console.log("The application server is now active!");
}); 
