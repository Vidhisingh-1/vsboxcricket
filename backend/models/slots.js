const mongoose=require("mongoose");

const slotschema=mongoose.Schema({
    date:{
        type:Date,
        required:true,
    },
    time:{
        type:String,
        enum:["9AM-12PM", "12PM-3PM", "3PM-6PM", "6PM-9PM"],
        required:true,
    },
    total_people:{
        type:Number,
        min:0,
    },
    booked:
    {
        type:Boolean,
        default:false,
    },
},
{timestamps:true}
);

module.exports=mongoose.model('Slot',slotschema);