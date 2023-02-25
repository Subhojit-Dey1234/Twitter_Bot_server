const VideoList = require('../models/Videoslist.js')
const router = require("express").Router();

router.get('/:id',async(req,res)=>{
    try{
        let video = await VideoList.findById(req.params.id)
        return res.json(video)
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