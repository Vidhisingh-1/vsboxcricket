const mongoose=require("mongoose");

const userschema=mongoose.Schema({
    email:{
        type:string,
        required:true,
        unique:true
    },
    hashedpassword:
    {
        type:String,
        required:true,
    }
});
module.exports=mongoose.model('User',userschema);