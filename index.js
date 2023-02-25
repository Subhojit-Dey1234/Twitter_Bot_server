require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoos = require("mongoose");
const app = express();
const cors = require("cors");
mongoos.set("strictQuery", false);

const db = require("./config/keys.js").mongoURI;

app.use(cors());

app.use(express.json());
mongoos
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("...Connected"))
	.catch((err) => console.log("Error", err));


const VideoList = require('./api/VideoList')

app.use('/',VideoList)

app.listen(process.env.PORT || 5000);