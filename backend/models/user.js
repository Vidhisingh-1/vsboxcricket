const mongoose=require("mongoose");

const User=mongoose.Schema({
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
module.exports={User};