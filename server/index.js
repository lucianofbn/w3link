const express = require("express");
var admin = require("firebase-admin");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
const rateLimit = require("express-rate-limit");
const { initializeApp } = require("firebase-admin/app");
const responseTime = require("response-time");
console.log(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);


admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://w3link-db-default-rtdb.firebaseio.com",
});

var db = admin.database();
const app = express();
app.use(express.json());
app.use(cors());
app.use(responseTime());
app.use(
	rateLimit({
		windowMs: 1 * 60 * 60 * 1000, // 12 hour duration in milliseconds
		max: 150,
		message: "You exceeded requests hour limit!",
		headers: true,
	})
);

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.get("/", (req, res) => {
	res.send("Express on Vercel");
});

app.post("/create-account", (req, res) => {
	console.log(req.body)
	var _username = req.body.username.replace(".", "*");
	var ref = db.ref("/users/" + _username);
	ref.once("value", function (snapshot) {
		var data = snapshot.val();
		if (data === null) {
			ref.set({
				timestamp: Date.now(),
			});
			res.send({ response: "user " + _username + " created." });
		} else {
			res.send({ response: "user " + _username + " logged in." });
		}
	});
});

app.post("/set-data", (req, res) => {
	var _username = req.body.username.replace(".", "*");
	var _bio = req.body.bio
	var _medias = req.body.medias
	var _links = req.body.links
	var bioref = db.ref("/users/" + _username);
	bioref.update({ "bio": _bio })
	var mediasref = db.ref("/users/" + _username);
	mediasref.update({ "medias": _medias })
	var linksref = db.ref("/users/" + _username);
	linksref.update({ "links": _links })
	res.send({ response: "data sent" });
});



app.post("/get-data", (req, res) => {
	var _username = req.body.username.replace(".", "*");
	var ref = db.ref("/users/" + _username);
	ref.once("value", function (snapshot) {
		var data = snapshot.val();
		if (data === null) {
			res.send({})
		} else {
			res.send(data)
		}
	});
});

app.listen(5000, () => {
	console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
