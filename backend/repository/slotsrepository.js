const mongoose=require("mongoose");
const Slot = require("../models/slots");

async function book({time,date,total_people})
{
    try{
    const slot=await Slot.create({
        time,
        date,
        total_people,
        booked:true,
    });
    return slot;
    }
    catch(error)
    {
       console.error("Error booking slot:", error); 
    }
}
async function findslot({time,date})
{
    const slotexist=await Slot.findOne({
        date,
        time,
    });
    return slotexist;
}
module.exports={book,findslot};