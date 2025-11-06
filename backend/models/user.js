const mongoose=require("mongoose");

const User=mongoose.Schema({
    username:{
        type:String,
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