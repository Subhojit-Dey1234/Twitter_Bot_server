const router = require("express").Router();
let token = process.env.BEARER_TOKEN

const axios = require('axios')

router.get('/:id',async(req,res)=>{
    const { id } = req.params
    try{
        let data = await axios.get(`https://api.twitter.com/2/tweets/${id}?tweet.fields=attachments,public_metrics,author_id,in_reply_to_user_id,conversation_id&expansions=attachments.media_keys&media.fields=variants,preview_image_url&user.fields=username`,{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        return res.status(200).json(data.data)
    }
    catch(err){
        return res.status(500)
    }
})

module.exports = router