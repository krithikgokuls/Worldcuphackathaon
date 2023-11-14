const Model=require('../models/model');
const express=require('express');
const router=express.Router();

//Post Mapping

router.post('/signup',async(req,res)=>{
    const playerdataInfo=new Model({
        name:req.body.name,
        age:req.body.age,
        destination:req.body.destination
    })
    try{
        const dataforsaveop=await playerdataInfo.save();
        res.status(200).json(dataforsaveop);
    }
    catch(error){
        res.status(400).json({
            message:error.message
        })
    }
})

module.exports=router;
