
const functions = require("firebase-functions");
const axios = require('axios')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


//trigger on a https get request
exports.helloWorld = functions.https.onRequest((req, res) => {
	res.send("hello from firebase functions..")
})

//trigger more sophisticated functions
exports.api = functions.https.onRequest( async (req, res) => {

	switch(req.method) {
		case "GET":

			const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
			res.send(response.data)
			break

		case "POST":
		const body = req.body
			res.send(body)
			break

		case "DELETE":
			res.send("Delete request..")
			break
		default:
			res.send("It is a default request")
	}

})



exports.userAdded = functions.auth.user().onCreate(user => {
	console.log(`${user.email} is created..`)
	return Promise.resolve()
})

exports.userDeleted = functions.auth.user().onDelete(user => {
	console.log(`${user.email} is deleted..`)
	return Promise.resolve()
})


exports.fruitAdded = functions.firestore
	.document('/fruits/{documentId}')
	.onCreate((snapshot, context ) => {
		console.log(snapshot.data())
		return Promise.resolve();
	})


exports.fruitDeleted = functions.firestore
	.document('/fruits/{documentId}')
	.onDelete((snapshot, context ) => {
		console.log(snapshot.data(), 'deleted')
		return Promise.resolve();
	})

exports.fruitUpdated = functions.firestore
	.document('/fruits/{documentId}')
	.onUpdate((snapshot, context ) => {
		console.log('before', snapshot.before.data())
		console.log('after', snapshot.after.data())
		return Promise.resolve();
	})


//check https://crontab.guru/examples.html for more examples
exports.scheduledFunctions = functions.pubsub
	.schedule('******')
	.onRun(context => {
		console.log("exectuted every minute")
	return null
})


















