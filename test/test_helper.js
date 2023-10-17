const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/users_test')
mongoose.connection
	.once('open', () => console.log('Connected succesfully!'))
	.on('error', (err) => console.warn(err))



beforeEach((done) => {
	mongoose.connection.collections.users.drop((err, stream) => {
		// console.log({err, stream}) // { err: null, stream: true }
		done()	
	})
})