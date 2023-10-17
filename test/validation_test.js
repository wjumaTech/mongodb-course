const assert = require('assert')
const User = require('../src/users.js')

describe('Validating records', () => {

	it('Requires a user name', (done) => {
		const user = new User({ name: undefined })
		const validationResult = user.validateSync();
		const { message } = validationResult.errors['name'];
		assert( message === 'Name is required.' );
		done()
	})

	it('Requires a user\'s name longer than 2 characters', (done) => {
		const user = new User({ name: 'Al' })
		const validationResult = user.validateSync()
		const { message } = validationResult.errors['name']
		assert(message === 'Name must be grether than 2 characters')
		done()
	})

	it('Disallows invalid records from being saved', (done) => {
		const user = new User({ name: 'Al' })
		user.save()
			.then()
			.catch((validationResult) => {
				const { message } = validationResult.errors['name']
				assert(message === 'Name must be grether than 2 characters')
				done()
			})
	})

}) 