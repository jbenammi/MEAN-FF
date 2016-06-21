var mongoose = require('mongoose');
var friend = mongoose.model('friends');

module.exports = (function(){
	return {
		index: function(request, response){
			friend.find({}, function(err, friends){
				if(err){
					response.json(err);
				}
				else{
					response.json(friends);
				}
			})
		},
		// show: function(request, response){
		// 	friend.find({_id: request.params.id}, function(err, friend){
		// 		if(err){
		// 			response.json(err);
		// 		}
		// 		else{
		// 			response.json(friend);
		// 		}
		// 	})
		// },
		create: function(request, response){
			var newfriend = new friend(request.body)

			newfriend.save(function(err){
				if(err){
					response.json(err);
					console.log(err);
				}
				else{
					response.json({success: true});
				}
			})
		},
		// update: function(request, response){
		// 	friend.update({_id: request.params.id}, request.body, function(err){
		// 		if (err){
		// 			response.json(err);
		// 		}
		// 		else{
		// 			response.redirect('/friends');
		// 		}
		// 	})
		// },
		delete: function(request, response){
			friend.remove({_id: request.params.id}, function(err){
				if(err){
					response.json(err);
				}
				else{
					response.json({success: true});
				}
			})
		}
		// response.json([
		// 	{name: "Jeff", age: 48},
		// 	{name: "Edgar", age: 28},
		// 	{name: "Hien", age: 24}
		// 	]);
	}
})();