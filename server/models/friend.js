var mongoose = require('mongoose');

var friendSchema = new mongoose.Schema({
	name: {type: String},
	age: {type: Number}},
	{timestamps: true}
);

var friend = mongoose.model('friends', friendSchema);