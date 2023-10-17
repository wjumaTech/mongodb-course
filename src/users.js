const mongoose = require('mongoose');
const postSchema = require('./post');
const Schema = mongoose.Schema


const UserSchema = new Schema({
	name: {
		type: String,
		validate: {
			validator: (name) => name.length > 2,
			message: `Name must be grether than 2 characters`
		},
		required: [true, 'Name is required.']
	},
	postCounter: {
		type: Number,
		required: [true, 'PostCounter is Required.'],
	 	default: 0
	},
	posts: [ postSchema ]
})


const User = mongoose.model('user', UserSchema);

module.exports = User;