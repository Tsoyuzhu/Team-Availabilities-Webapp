var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require("mongoose");

app = express();
mongoose.connect("mongodb://localhost/hr_app");

// This is a terrible schema structure. 

var memberSchema = new mongoose.Schema({
	name: String,
	mon8: { type: Number, default: 0},
	mon9: { type: Number, default: 0},
	mon10: { type: Number, default: 0},
	mon11: { type: Number, default: 0},
	mon12: { type: Number, default: 0},
	mon13: { type: Number, default: 0},
	mon14: { type: Number, default: 0},
	mon15: { type: Number, default: 0},
	mon16: { type: Number, default: 0},
	mon17: { type: Number, default: 0},
	mon18: { type: Number, default: 0},
	mon19: { type: Number, default: 0},
	mon20: { type: Number, default: 0},
	mon21: { type: Number, default: 0},
	mon22: { type: Number, default: 0},
	mon23: { type: Number, default: 0},
	tue8: { type: Number, default: 0},
	tue9: { type: Number, default: 0},
	tue10: { type: Number, default: 0},
	tue11: { type: Number, default: 0},
	tue12: { type: Number, default: 0},
	tue13: { type: Number, default: 0},
	tue14: { type: Number, default: 0},
	tue15: { type: Number, default: 0},
	tue16: { type: Number, default: 0},
	tue17: { type: Number, default: 0},
	tue18: { type: Number, default: 0},
	tue19: { type: Number, default: 0},
	tue20: { type: Number, default: 0},
	tue12: { type: Number, default: 0},
	tue22: { type: Number, default: 0},
	tue23: { type: Number, default: 0},
	wed8: { type: Number, default: 0},
	wed9: { type: Number, default: 0},
	wed10: { type: Number, default: 0},
	wed11: { type: Number, default: 0},
	wed12: { type: Number, default: 0},
	wed13: { type: Number, default: 0},
	wed14: { type: Number, default: 0},
	wed15: { type: Number, default: 0},
	wed16: { type: Number, default: 0},
	wed17: { type: Number, default: 0},
	wed18: { type: Number, default: 0},
	wed19: { type: Number, default: 0},
	wed20: { type: Number, default: 0},
	wed21: { type: Number, default: 0},
	wed22: { type: Number, default: 0},
	wed23: { type: Number, default: 0},
	thu8: { type: Number, default: 0},
	thu9: { type: Number, default: 0},
	thu10: { type: Number, default: 0},
	thu11: { type: Number, default: 0},
	thu12: { type: Number, default: 0},
	thu13: { type: Number, default: 0},
	thu14: { type: Number, default: 0},
	thu15: { type: Number, default: 0},
	thu16: { type: Number, default: 0},
	thu17: { type: Number, default: 0},
	thu18: { type: Number, default: 0},
	thu19: { type: Number, default: 0},
	thu20: { type: Number, default: 0},
	thu21: { type: Number, default: 0},
	thu22: { type: Number, default: 0},
	thu23: { type: Number, default: 0},
	fri8: { type: Number, default: 0},
	fri9: { type: Number, default: 0},
	fri10: { type: Number, default: 0},
	fri11: { type: Number, default: 0},
	fri12: { type: Number, default: 0},
	fri13: { type: Number, default: 0},
	fri14: { type: Number, default: 0},
	fri15: { type: Number, default: 0},
	fri16: { type: Number, default: 0},
	fri17: { type: Number, default: 0},
	fri18: { type: Number, default: 0},
	fri19: { type: Number, default: 0},
	fri20: { type: Number, default: 0},
	fri21: { type: Number, default: 0},
	fri22: { type: Number, default: 0},
	fri23: { type: Number, default: 0},
	sat9: { type: Number, default: 0},
	sat10: { type: Number, default: 0},
	sat11: { type: Number, default: 0},
	sat12: { type: Number, default: 0},
	sat13: { type: Number, default: 0},
	sat14: { type: Number, default: 0},
	sat15: { type: Number, default: 0},
	sat16: { type: Number, default: 0},
	sat17: { type: Number, default: 0},
	sat18: { type: Number, default: 0},
	sat19: { type: Number, default: 0},
	sat20: { type: Number, default: 0},
	sat21: { type: Number, default: 0},
	sat22: { type: Number, default: 0},
	sat23: { type: Number, default: 0},
	sun9: { type: Number, default: 0},
	sun10: { type: Number, default: 0},
	sun11: { type: Number, default: 0},
	sun12: { type: Number, default: 0},
	sun13: { type: Number, default: 0},
	sun14: { type: Number, default: 0},
	sun15: { type: Number, default: 0},
	sun16: { type: Number, default: 0},
	sun17: { type: Number, default: 0},
	sun18: { type: Number, default: 0},
	sun19: { type: Number, default: 0},
	sun20: { type: Number, default: 0},
	sun21: { type: Number, default: 0},
	sun22: { type: Number, default: 0},
	sun23: { type: Number, default: 0},
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

// CREATE 
app.get('/add', function (req, res) {
	res.render('add'); 
});
app.post('/add/submit', function (req, res) {
	// Process form submission
	// Fill Schema

	for (var key in req.body.submit) {
	    if (req.body.submit.hasOwnProperty(key)) {
	        console.log(key + " -> " + req.body.submit[key]);
	    }
	}
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

// UPDATE 
app.get('/edit', function (req, res) {
	Member.find({}, function(err, members) {
		if (err) {
			console.log("I couldn't find anything");
		} else {
			res.render('edit', {members, members});
		}
	});
});
app.get('/edit/:id', function(req, res){
	console.log("You sent the id "+req.params.id);
	Member.findOne({_id: req.params.id}, function(err, member) {
		if (err) {
			console.log("FAILURE: Loading Existing members");
		} else {
			console.log(member);
			res.render('editmem', {member, member});
		}
	});
});
app.post('/edit/:id', function(req, res){
	console.log("You want to edit the id "+req.params.id);
	Member.findById(req.params.id, function(err, member) {
		if (err) {
			console.log("FAILURE: Could not find requested member to edit");
		} else {
			member.set({
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
			sun23: req.body.submit.sun23 
			});
		}
		member.save(function (err, updatedMember) {
		if (err) {
			console.log("I failed to save new data");
		} else {
			res.render('editmem', {member: updatedMember, success: 1});
		}
	});
	});
	
});

app.get('/find', function (req, res) {
	Member.find({}, function(err, members) {
		if (err) {
			console.log("I couldn't find anything");
		} else {
			res.render('find', {members, members});
		}
	});
});

app.get('/find/:id', function (req, res) {
	Member.find({}, function(err, members) {
		if (err) {
			console.log("I couldn't find anything");
		} else {
			res.render('find', {members, members});
		}
	});
});

//DESTROY
app.get('/destroy', function (req, res) {
	Member.find({}, function(err, members) {
		if (err) {
			console.log("FAILURE: find failed");
		} else {
			res.render('destroy', {members: members});
		}
	});
});
app.get('/destroy/:id', function(req, res){
	console.log("You sent the id "+req.params.id);
	Member.remove({_id: req.params.id}, function(err) {
		if (err) {
			console.log("Failed to destroy the database member");
		}
	});
	res.redirect('/destroy');
});

// START SERVER
app.listen(3000, function(){
	console.log("The application server is now active!");
}); 
