const assert = require('assert')
const User = require('../src/users.js')


describe('Deleting an user', () => {

	let joe

	beforeEach((done) => {
		joe = new User({ name: 'Joe' })
		joe.save()
			.then(() => {
				done() 
			})
	})

	it('model instance remove', (done) => {
		joe.deleteOne()
			.then(userToDelete => userToDelete)
			.then((userDeleted) => {
				return User.findOne({ _id: userDeleted._id })
			})
			.then((user) => {
				assert( user === null )
				done()
			})
	})

	it('class method remove', (done) => {
		User.deleteOne({ name: 'Joe' })
			.then((user) => {
				return User.findOne({ name: 'Joe' })
			})
			.then((user) => {
				assert(user === null)
				done()
			})
	})

	it('class method findOneAndRemove', (done) => {
		User.findOneAndRemove({ name: 'joe' })
			.then((user) => user)
			.then((user) => {
				assert( user === null )
				done()
			})
	})

	it('class method findByIdAndRemove', (done) => {
		User.findByIdAndRemove(joe._id)
			.then((user) => user)
			.then((userDel) => User.findOne({ _id: userDel._id }))
			.then((userDocs) => {
				assert( userDocs === null )
				done()
			})
	}) 

})