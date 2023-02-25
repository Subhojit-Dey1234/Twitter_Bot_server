const mongoose = require("mongoose")
const Schema  = mongoose.Schema;

const VideoList = new Schema({
    twitter_id:{
        type : String,
        required : true
    },
    video_list : []
})

module.exports = mongoose.model("videoList",VideoList)