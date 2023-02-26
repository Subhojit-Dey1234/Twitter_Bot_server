require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const VideoList = require('./api/VideoList')
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

app.use('/',VideoList)
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})