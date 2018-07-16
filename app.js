var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require("mongoose");

app = express();
mongoose.connect("mongodb://localhost/hr_app");

// This schema holds the availabilities of a 
// member in the system.

var memberSchema = new mongoose.Schema({
	name: String,
	monF: [Number],
	tueF: [Number],
	wedF: [Number],
	thuF: [Number],
	friF: [Number],
	satF: [Number],
	sunF: [Number],
	monNF: [Number],
	tueNF: [Number],
	wedNF: [Number],
	thuNF: [Number],
	friNF: [Number],
	satNF: [Number],
	sunNF: [Number]
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

	// dayF corresponds to being free for face to face meeting.
	// dayNF corresponds to being free online only. 

	// We are going to create the array of timeslots for each day. 
	// Should try to find a cleaner way to implement this in future.  
	var name = req.body.name;
	var monF = extractTimes (req.body.monF);
	var tueF = extractTimes (req.body.tueF);
	var wedF = extractTimes (req.body.wedF);
	var thuF = extractTimes (req.body.thuF);
	var friF = extractTimes (req.body.friF);
	var satF = extractTimes (req.body.satF);
	var sunF = extractTimes (req.body.sunF);
	var monNF = extractTimes (req.body.monNF);
	var tueNF = extractTimes (req.body.tueNF);
	var wedNF = extractTimes (req.body.wedNF);
	var thuNF = extractTimes (req.body.thuNF);
	var friNF = extractTimes (req.body.friNF);
	var satNF = extractTimes (req.body.satNF);
	var sunNF = extractTimes (req.body.sunNF);

	var newMember = new Member({
		name: name,
		monF: monF,
		tueF: tueF,
		wedF: wedF,
		thuF: thuF,
		friF: friF,
		satF: satF,
		sunF: sunF,
		monNF: monNF,
		tueNF: tueNF,
		wedNF: wedNF,
		thuNF: thuNF,
		friNF: friNF,
		satNF: satNF,
		sunNF: sunNF
	});

	// Attempt to save to database 
	newMember.save(function(err, cat) {
		if(err) {
			console.log("SOMETHING WENT WRONG!");
		} else {
			console.log("sucessful save!");
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
			res.render('editmem', {member, member});
		}
	});
});
app.post('/edit/:id', function(req, res){
	console.log("You want to edit the id "+ req.params.id);

	// Process form submission
	// Fill Schema

	Member.findById(req.params.id, function(err, member) {
		if (err) {
			console.log("FAILURE: Could not find requested member to edit");
		} else {
			// As explained above for CREATE
			var monF = extractTimes (req.body.monF);
			var tueF = extractTimes (req.body.tueF);
			var wedF = extractTimes (req.body.wedF);
			var thuF = extractTimes (req.body.thuF);
			var friF = extractTimes (req.body.friF);
			var satF = extractTimes (req.body.satF);
			var sunF = extractTimes (req.body.sunF);
			var monNF = extractTimes (req.body.monNF);
			var tueNF = extractTimes (req.body.tueNF);
			var wedNF = extractTimes (req.body.wedNF);
			var thuNF = extractTimes (req.body.thuNF);
			var friNF = extractTimes (req.body.friNF);
			var satNF = extractTimes (req.body.satNF);
			var sunNF = extractTimes (req.body.sunNF);

			member.set({
				monF: monF,
				tueF: tueF,
				wedF: wedF,
				thuF: thuF,
				friF: friF,
				satF: satF,
				sunF: sunF,
				monNF: monNF,
				tueNF: tueNF,
				wedNF: wedNF,
				thuNF: thuNF,
				friNF: friNF,
				satNF: satNF,
				sunNF: sunNF			
			});
		}
		member.save(function (err, updatedMember) {
		console.log("Stronk edits")
		if (err) {
			console.log("I failed to save new data");
		} else {
			console.log(updatedMember);
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
			res.render('find', {members:members, success:1});
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
	// Check for no members selected
	if (array.length == 0) {
		// Bit of a poor solution. 
		// Should implement something more graceful in future. 
		return res.render('index', {success:-1})
	}
	//console.log(array);	
	Member.find({'_id': { $in: array} }, function(err, reqmems){
		if (err) {
			console.log("Something went wrong with displaying members");
		} else {
	     	console.log(reqmems);
	     	console.log(array.length);
	     	console.log('All present: ');
	     	// Create an object which contains information about time slots where
	     	// all members are present. 
	     	var allPresent = {
	     		monF: extractAllPresent(reqmems, 'monF'),
	     		tueF: extractAllPresent(reqmems, 'tueF'),
	     		wedF: extractAllPresent(reqmems, 'wedF'),
	     		thuF: extractAllPresent(reqmems, 'thuF'),
	     		friF: extractAllPresent(reqmems, 'friF'),
	     		satF: extractAllPresent(reqmems, 'satF'),
	     		sunF: extractAllPresent(reqmems, 'sunF'),
	     		monNF: extractAllPresent(reqmems, 'monNF'),
	     		tueNF: extractAllPresent(reqmems, 'tueNF'),
	     		wedNF: extractAllPresent(reqmems, 'wedNF'),
	     		thuNF: extractAllPresent(reqmems, 'thuNF'),
	     		friNF: extractAllPresent(reqmems, 'friNF'),
	     		satNF: extractAllPresent(reqmems, 'satNF'),
	     		sunNF: extractAllPresent(reqmems, 'sunNF')
	     	};
	     	console.log(allPresent);
	 		res.render('display', {reqmems:reqmems, allPresent:allPresent});
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

function extractAllPresent (reqmems, day) {
	var retArray = []; 
	// Arbitary 0. We just need the length of any day array. 
	for (var k = 0; k < reqmems[0][day].length; k++) {
		var allPresent = 1;
		for (var i = 0; i < reqmems.length; i++) {
			allPresent = allPresent * reqmems[i][day][k]; 
		}
		retArray.push(allPresent);
	}
	return retArray;
}