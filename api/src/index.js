const express = require("express");
const mongoose = require("mongoose");
const axios = require('axios')
const { connectDb } = require("./helpers/db");
const { host, port, db, authapiurl } = require("./configuration");
const { response } = require("express");
const app = express();
const postSchema = new mongoose.Schema({
	name: String
});
const Post = mongoose.model("Post", postSchema);

const startServer = () => {
	app.listen(port, () => {
	  console.log(`Started api service on port ${port}`);
	  console.log(`Our host is ${host}`);
	  console.log(`Database url ${db}`);
		
	  const silence = new Post({ name: "Silence" });
	  silence.save(function(err, savedSilence) {
	  if (err) return console.error(err);
	  console.log("Saved silence savedSilence", savedSilence);
	  });
	});
  };

app.get("/test", (req, res) => {
	res.send("Our api server is working correctly !!!");
});

app.get("/api/testapidata", (req, res) => {
	res.json({
		testwithapi: true
	})
});

app.get("/testwithcurrentuser", (req,res) => {
	console.log("authapiurl",authapiurl)
	axios.get(authapiurl + '/currentUser').then(response => {
		res.json({
			TestWithCurrentUser: true,
			CurrentUserFromAuth: response.data
		});
	})
	
});

connectDb()
	.on("error", console.log)
	.on("disconnected", connectDb)
	.once("open", startServer);