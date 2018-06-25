var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require("mongoose");

app = express();
mongoose.connect("mongodb://localhost/hr_app");

// This schema holds the availabilities of a 
// member in the system.

var memberSchema = new mongoose.Schema({
	name: String,
	mon: [Number],
	tue: [Number],
	wed: [Number],
	thu: [Number],
	fri: [Number],
	sat: [Number],
	sun: [Number]
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
	var name; 
	var mon = [];
	var tue = [];
	var wed = [];
	var thu = [];
	var fri = [];
	var sat = [];
	var sun = [];

	// We are going to create the array of timeslots for each day. 
	// Should try to find a cleaner way to implement this in future.  
	name = req.body.name;
	mon = extractTimes (req.body.mon);
	tue = extractTimes (req.body.tue);
	wed = extractTimes (req.body.wed);
	thu = extractTimes (req.body.thu);
	fri = extractTimes (req.body.fri);
	sat = extractTimes (req.body.sat);
	sun = extractTimes (req.body.sun);

	var newMember = new Member({
		name: name,
		mon: mon,
		tue: tue,
		wed: wed,
		thu: thu,
		fri: fri,
		sat: sat,
		sun: sun
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
	console.log("You want to edit the id "+req.params.id);
	Member.findOne({_id: req.params.id}, function(err, member) {
		if (err) {
			console.log("FAILURE: Could not load the member to edit.");
		} else {
			console.log(member);
			res.render('editmem', {member, member});
		}
	});
});
app.post('/edit/:id', function(req, res){
	console.log("You want to edit the id "+req.params.id);

	// Process form submission
	// Fill Schema
	var name; 
	var mon = [];
	var tue = [];
	var wed = [];
	var thu = [];
	var fri = [];
	var sat = [];
	var sun = [];

	Member.findById(req.params.id, function(err, member) {
		if (err) {
			console.log("FAILURE: Could not find requested member to edit");
		} else {
			// As explained above for CREATE
			mon = extractTimes (req.body.mon);
			tue = extractTimes (req.body.tue);
			wed = extractTimes (req.body.wed);
			thu = extractTimes (req.body.thu);
			fri = extractTimes (req.body.fri);
			sat = extractTimes (req.body.sat);
			sun = extractTimes (req.body.sun);

			member.set({
				mon: mon,
				tue: tue,
				wed: wed,
				thu: thu,
				fri: fri,
				sat: sat,
				sun: sun		
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

app.post('/find/display', function (req, res) {
	console.log("Received a display request")
	var array = [];
	for (var key in req.body.members ) {
		if (req.body.members[key] == 1) {
			array.push( mongoose.Types.ObjectId(key) );
		}
	};
	//console.log(array);	
	Member.find({'_id': { $in: array} }, function(err, reqmems){
		if (err) {
			console.log("Something went wrong with displaying members");
		} else {
	     	console.log(reqmems);
	 		res.render('display', {reqmems:reqmems});
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

// HELPER FUNCTIONS
function extractTimes (parsedReq) {
	var array = [];
	for (var key in parsedReq) {
	    if (parsedReq.hasOwnProperty(key)) {
	        console.log(key + " -> " + parsedReq[key]);
        	array.push(parsedReq[key]);
	    } else {
	    	console.log("I didn't find the key");
	    }
	}
	return array;
}