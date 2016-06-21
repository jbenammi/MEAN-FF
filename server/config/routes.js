var mongoose = require('mongoose');
var friend = mongoose.model('friends');
var friends = require('../controllers/friends.js');

module.exports = function(app){
	// app.get('/', function(request, response){
	// 	friends.showAll(request, response);
	// });

	app.get('/friends', function(request, response){
		friends.index(request, response);
	});

	app.post('/friends', function(request, response){
		friends.create(request, response);
	});

	app.get('/friends/:id', function(request, response){
		friends.show(request, response);
	});

	app.put('/friends/:id', function(request, response){
		friends.update(request, response);
	});

	app.delete('/friends/:id', function(request, response){
		friends.delete(request, response);
	})


}