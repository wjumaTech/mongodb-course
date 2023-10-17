const mongoose = require('mongoose')
const assert = require('assert')
const User = require('../src/users.js')


describe('Reading users out of the database', () => {

	let joe

	beforeEach((done) => {
		joe = new User({ name: 'Joe' })
		joe.save()
			.then(() => {
				done() 
			})
	})


	it('Find all users with a name joe', (done) => {

		User.find({ 'name': 'Joe' })
			.then((users) => {
				assert(users[0]._id.toString() === joe._id.toString())
				done()
			})
	})

	it('Find a user with a particular id', (done) => {

		User.findOne({ _id: joe._id })
			.then((user) => {
				assert( user.name === joe.name )
				done()
			})
	})
 
})