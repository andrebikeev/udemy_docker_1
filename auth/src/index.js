const express = require("express");
const { connectDb } = require("./helpers/db");
const { host, port, db, apiurl } = require("./configuration");
const axios = require('axios')
const app = express();

const startServer = () => {
	app.listen(port, () => {
	  console.log(`Started auth service on port ${port}`);
	  console.log(`Our host is ${host}`);
	  console.log(`Database url ${db}`);
	  });
	};

app.get("/test", (req, res) => {
	res.send("Our auth server is working correctly !!!");
});

app.get("/testwithapidata", (req, res) => {
	console.log(`debug apiurl = ${apiurl}`);
	axios.get(apiurl + '/testapidata').then(response => {
		res.json({
			testapidata: response.data.testwithapi
		})
	})
});

app.get("/api/currentUser", (req,res) => {
	res.json({
		id: "id_31241343",
		email: "example@mail.com"
	});
});

connectDb()
	.on("error", console.log)
	.on("disconnected", connectDb)
	.once("open", startServer);