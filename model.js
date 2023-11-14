const mongoose=require('mongoose')

const Schema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    age:{
        required:true,
        type:Number
    },
    destination:{
        required:true,
        type:String
    }
})
module.exports=mongoose.model('PlayerInfo',Schema)
