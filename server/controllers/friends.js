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
		update: function(request, response){
			console.log(request.body)
			console.log(request.params)
			friend.update({_id: request.params.id}, {$set: {name: request.body.name, age: request.body.age}}, function(err){
				if (err){
					response.json(err);
				}
				else{
					response.json({success: true});
				}
			})
		},
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
	}
})();