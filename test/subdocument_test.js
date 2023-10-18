const assert = require('assert')
const User = require('../src/users.js')


describe('Subdocuments', () => {

	it('Can create a subdocument', (done) => {
		let joe = new User({ 
			name: 'Joe',
			posts: [
				{
					title: 'PostTitle'
				}
			]
		})

		joe.save()
			.then(user => User.findOne({ name: 'Joe' }))
			.then((user) => {
				assert( user.posts[0]['title'] === 'PostTitle' )
				done()
			})
	})

	it('Can add subdocuments to an existing record', () => {

		let joe = new User({ 
			name: 'Joe',
			posts: []
		})

		joe.save()
			.then(user => {
				console.log(user)
			})

		
	})
}) 