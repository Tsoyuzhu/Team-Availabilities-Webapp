var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require("mongoose");

app = express();
mongoose.connect("mongodb://localhost/hr_app");

// This is a terrible schema structure. 

var memberSchema = new mongoose.Schema({
	name: String,
	mon8: { type: String, default: "off"},
	mon9: { type: String, default: "off"},
	mon10: { type: String, default: "off"},
	mon11: { type: String, default: "off"},
	mon12: { type: String, default: "off"},
	mon13: { type: String, default: "off"},
	mon14: { type: String, default: "off"},
	mon15: { type: String, default: "off"},
	mon16: { type: String, default: "off"},
	mon17: { type: String, default: "off"},
	mon18: { type: String, default: "off"},
	mon19: { type: String, default: "off"},
	mon20: { type: String, default: "off"},
	mon21: { type: String, default: "off"},
	mon22: { type: String, default: "off"},
	mon23: { type: String, default: "off"},
	tue8: { type: String, default: "off"},
	tue9: { type: String, default: "off"},
	tue10: { type: String, default: "off"},
	tue11: { type: String, default: "off"},
	tue12: { type: String, default: "off"},
	tue13: { type: String, default: "off"},
	tue14: { type: String, default: "off"},
	tue15: { type: String, default: "off"},
	tue16: { type: String, default: "off"},
	tue17: { type: String, default: "off"},
	tue18: { type: String, default: "off"},
	tue19: { type: String, default: "off"},
	tue20: { type: String, default: "off"},
	tue12: { type: String, default: "off"},
	tue22: { type: String, default: "off"},
	tue23: { type: String, default: "off"},
	wed8: { type: String, default: "off"},
	wed9: { type: String, default: "off"},
	wed10: { type: String, default: "off"},
	wed11: { type: String, default: "off"},
	wed12: { type: String, default: "off"},
	wed13: { type: String, default: "off"},
	wed14: { type: String, default: "off"},
	wed15: { type: String, default: "off"},
	wed16: { type: String, default: "off"},
	wed17: { type: String, default: "off"},
	wed18: { type: String, default: "off"},
	wed19: { type: String, default: "off"},
	wed20: { type: String, default: "off"},
	wed21: { type: String, default: "off"},
	wed22: { type: String, default: "off"},
	wed23: { type: String, default: "off"},
	thu8: { type: String, default: "off"},
	thu9: { type: String, default: "off"},
	thu10: { type: String, default: "off"},
	thu11: { type: String, default: "off"},
	thu12: { type: String, default: "off"},
	thu13: { type: String, default: "off"},
	thu14: { type: String, default: "off"},
	thu15: { type: String, default: "off"},
	thu16: { type: String, default: "off"},
	thu17: { type: String, default: "off"},
	thu18: { type: String, default: "off"},
	thu19: { type: String, default: "off"},
	thu20: { type: String, default: "off"},
	thu21: { type: String, default: "off"},
	thu22: { type: String, default: "off"},
	thu23: { type: String, default: "off"},
	fri8: { type: String, default: "off"},
	fri9: { type: String, default: "off"},
	fri10: { type: String, default: "off"},
	fri11: { type: String, default: "off"},
	fri12: { type: String, default: "off"},
	fri13: { type: String, default: "off"},
	fri14: { type: String, default: "off"},
	fri15: { type: String, default: "off"},
	fri16: { type: String, default: "off"},
	fri17: { type: String, default: "off"},
	fri18: { type: String, default: "off"},
	fri19: { type: String, default: "off"},
	fri20: { type: String, default: "off"},
	fri21: { type: String, default: "off"},
	fri22: { type: String, default: "off"},
	fri23: { type: String, default: "off"},
	sat9: { type: String, default: "off"},
	sat10: { type: String, default: "off"},
	sat11: { type: String, default: "off"},
	sat12: { type: String, default: "off"},
	sat13: { type: String, default: "off"},
	sat14: { type: String, default: "off"},
	sat15: { type: String, default: "off"},
	sat16: { type: String, default: "off"},
	sat17: { type: String, default: "off"},
	sat18: { type: String, default: "off"},
	sat19: { type: String, default: "off"},
	sat20: { type: String, default: "off"},
	sat21: { type: String, default: "off"},
	sat22: { type: String, default: "off"},
	sat23: { type: String, default: "off"},
	sun9: { type: String, default: "off"},
	sun10: { type: String, default: "off"},
	sun11: { type: String, default: "off"},
	sun12: { type: String, default: "off"},
	sun13: { type: String, default: "off"},
	sun14: { type: String, default: "off"},
	sun15: { type: String, default: "off"},
	sun16: { type: String, default: "off"},
	sun17: { type: String, default: "off"},
	sun18: { type: String, default: "off"},
	sun19: { type: String, default: "off"},
	sun20: { type: String, default: "off"},
	sun21: { type: String, default: "off"},
	sun22: { type: String, default: "off"},
	sun23: { type: String, default: "off"},
})

var Member = mongoose.model("Member", memberSchema);

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
	// Fill Schema
	var newMember = new Member({
		name: req.body.name,
		mon8: req.body.submit.mon8,
		mon9: req.body.submit.mon9,
		mon10: req.body.submit.mon10,
		mon11: req.body.submit.mon11,
		mon12: req.body.submit.mon12,
		mon13: req.body.submit.mon13,
		mon14: req.body.submit.mon14,
		mon15: req.body.submit.mon15,
		mon16: req.body.submit.mon16,
		mon17: req.body.submit.mon17,
		mon18: req.body.submit.mon18,
		mon19: req.body.submit.mon19,
		mon20: req.body.submit.mon20,
		mon21: req.body.submit.mon21,
		mon22: req.body.submit.mon22,
		mon23: req.body.submit.mon23,
		tue8: req.body.submit.tue8,
		tue9: req.body.submit.tue9,
		tue10: req.body.submit.tue10,
		tue11: req.body.submit.tue11,
		tue12: req.body.submit.tue12,
		tue13: req.body.submit.tue13,
		tue14: req.body.submit.tue14,
		tue15: req.body.submit.tue15,
		tue16: req.body.submit.tue16,
		tue17: req.body.submit.tue17,
		tue18: req.body.submit.tue18,
		tue19: req.body.submit.tue19,
		tue20: req.body.submit.tue20,
		tue21: req.body.submit.tue21,
		tue22: req.body.submit.tue22,
		tue23: req.body.submit.tue23,
		wed8: req.body.submit.wed8,
		wed9: req.body.submit.wed9,
		wed10: req.body.submit.wed10,
		wed11: req.body.submit.wed11,
		wed12: req.body.submit.wed12,
		wed13: req.body.submit.wed13,
		wed14: req.body.submit.wed14,
		wed15: req.body.submit.wed15,
		wed16: req.body.submit.wed16,
		wed17: req.body.submit.wed17,
		wed18: req.body.submit.wed18,
		wed19: req.body.submit.wed19,
		wed20: req.body.submit.wed20,
		wed21: req.body.submit.wed21,
		wed22: req.body.submit.wed22,
		wed23: req.body.submit.wed23,
		thu8: req.body.submit.thu8,
		thu9: req.body.submit.thu9,
		thu10: req.body.submit.thu10,
		thu11: req.body.submit.thu11,
		thu12: req.body.submit.thu12,
		thu13: req.body.submit.thu13,
		thu14: req.body.submit.thu14,
		thu15: req.body.submit.thu15,
		thu16: req.body.submit.thu16,
		thu17: req.body.submit.thu17,
		thu18: req.body.submit.thu18,
		thu19: req.body.submit.thu19,
		thu20: req.body.submit.thu20,
		thu21: req.body.submit.thu21,
		thu22: req.body.submit.thu22,
		thu23: req.body.submit.thu23,
		fri8: req.body.submit.fri8,
		fri9: req.body.submit.fri9,
		fri10: req.body.submit.fri10,
		fri11: req.body.submit.fri11,
		fri12: req.body.submit.fri12,
		fri13: req.body.submit.fri13,
		fri14: req.body.submit.fri14,
		fri15: req.body.submit.fri15,
		fri16: req.body.submit.fri16,
		fri17: req.body.submit.fri17,
		fri18: req.body.submit.fri18,
		fri19: req.body.submit.fri19,
		fri20: req.body.submit.fri20,
		fri21: req.body.submit.fri21,
		fri22: req.body.submit.fri22,
		fri23: req.body.submit.fri23,
		sat8: req.body.submit.sat8,
		sat9: req.body.submit.sat9,
		sat10: req.body.submit.sat10,
		sat11: req.body.submit.sat11,
		sat12: req.body.submit.sat12,
		sat13: req.body.submit.sat13,
		sat14: req.body.submit.sat14,
		sat15: req.body.submit.sat15,
		sat16: req.body.submit.sat16,
		sat17: req.body.submit.sat17,
		sat18: req.body.submit.sat18,
		sat19: req.body.submit.sat19,
		sat20: req.body.submit.sat20,
		sat21: req.body.submit.sat21,
		sat22: req.body.submit.sat22,
		sat23: req.body.submit.sat23,
		sun8: req.body.submit.sun8,
		sun9: req.body.submit.sun9,
		sun10: req.body.submit.sun10,
		sun11: req.body.submit.sun11,
		sun12: req.body.submit.sun12,
		sun13: req.body.submit.sun13,
		sun14: req.body.submit.sun14,
		sun15: req.body.submit.sun15,
		sun16: req.body.submit.sun16,
		sun17: req.body.submit.sun17,
		sun18: req.body.submit.sun18,
		sun19: req.body.submit.sun19,
		sun20: req.body.submit.sun20,
		sun21: req.body.submit.sun21,
		sun22: req.body.submit.sun22,
		sun23: req.body.submit.sun23,
	});
	// Attempt to save to database 
	newMember.save(function(err, cat) {
		if(err) {
			console.log("SOMETHING WENT WRONG!");
		} else {
			console.log("success!");
		}
	});
	res.redirect('/');
});
app.get('/edit', function (req, res) {
	res.render('edit'); 
});
app.get('/find', function (req, res) {
	res.render('index'); 
});
app.get('/destroy', function (req, res) {
	Member.find({}, function(err, members) {
		if (err) {
			console.log("I couldn't find anything");
		} else {
			res.render('destroy', {members, members});
		}
	});
});

app.get('/destroy/:id', function(req, res){
	console.log("You sent the id "+req.params.id);
	res.redirect('/destroy')
});

// START SERVER
app.listen(3000, function(){
	console.log("The application server is now active!");
}); 
