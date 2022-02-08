var express = require('express');
const hotel_staff = require('./Models/hotel_staff');
var router = express.Router();


//to fetch data
router.get('/hotel_staff',async(req,res)=>{
    const idata = await hotel_staff.find()
    res.send(idata)
})

//to add the data
router.post("/hotel_staff",async(req,res)=>{
    const idata = new hotel_staff({
        s_name:req.body.s_name,
        s_post:req.body.s_post
    })

    await idata.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating data

router.patch('/hotel_staff/:id',async (req,res)=>{
    const idata = await hotel_staff.findOne({_id:req.params.id})
    idata.s_name = req.body.s_name
    idata.s_post = req.body.s_post
    await idata.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api data
router.delete("/hotel_staff/:id",async(req,res)=>{
    const _id = req.params.id;
    const data = await hotel_staff.findByIdAndDelete(_id)
    res.send(data);
})

module.exports = router 