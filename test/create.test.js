const assert = require("assert");

const User = require('../src/users.js')

describe('Creating records', () => {

	it('Save a user', (done) => {
			const joe = new User({ name: 'Joe' })
			joe.save()
				.then((user) => {
					assert(!user.isNew)
					done()
				})
	})
})