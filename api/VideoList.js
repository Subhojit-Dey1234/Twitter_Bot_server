const VideoList = require('../models/Videoslist.js')
const router = require("express").Router();
const mongoose = require('mongoose');
const {Types: {ObjectId}} = mongoose;
const validateObjectId = (id) => ObjectId.isValid(id) && (new ObjectId(id)).toString() === id;


router.get('/:id',async(req,res)=>{
    try{
        if(validateObjectId(req.params.id) === false){
            console.log("asdnasdnaksdn")
            return res.status(400).json("The Object Id is not valid")
        }
        let video = await VideoList.find({_id : req.params.id})
        if(video.length === 0) return res.status(404)
        return res.json(video[0])
    }
    catch(err){
        return res.status(404)
    }
})


router.post('/',async(req,res)=>{
    try{
        let video = await VideoList(req.body)
        video.save()
        res.status(201).send(video._id)
    }
    catch(err){
        res.status(401).json("Error while posting")
    }
})


module.exports = router