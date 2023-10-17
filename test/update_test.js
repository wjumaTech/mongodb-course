const assert = require('assert')
const User = require('../src/users.js')

describe('Updating records', () => {

	let joe
	let userName

	beforeEach((done) => {
		joe = new User({ name: 'Joe', postCounter: 0 })

		joe.save()
			.then(() => done())
	})

	function assertName( operation, done ) {
			operation
				.then((user) => User.find({}))
				.then((users) => {
					assert( users.length === 1 )		
					assert( users[0].name === 'Peter' )	
					done()
				})
	}

	it('Instance set and save', (done) => {
		joe.set('name', 'Peter')
		assertName(joe.save(), done)	
	})

	it('A model instance can update', (done) => {
		assertName(joe.updateOne({ name: 'Peter' }, { name: 'Peter' }), done)
	})

	it('A model can update', () => {
	
	})

	it('A model can update one record', () => {
			
	})

	it('A user can have a postCounter increment by 1', (done) => {
		User.updateOne({ name: 'Joe' }, { $inc: { postCounter: 1 } })
			.then((result) => User.findOne({ name: 'Joe' }))
			.then(user => {
				assert( user.postCounter === 1 )
				done()
			})
	})
})