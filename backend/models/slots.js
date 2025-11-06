const mongoose=require("mongoose");


const slot=mongoose.Schema({
    date:{
        type:Date,
    },
    time:{
        type:TimeRanges
    },
    duration:{
        type:Number
    },
    total_people:{
        type:Number
    },
    booked:
    {
        type:Boolean
    }
});

module.exports={slot};