const { findslot } = require("../repository/slotsrepository");

const slots=["9AM-12PM","12PM-3PM","3PM-6PM","6PM-9PM"];

function slotvalidator(req,res,next){
    const time=req.body.time;
    const date=req.body.date;

    if(!time)
    {
        return res.status(400).json({
            message:'Slot is required'
        });
    }
    if(!date)
    {
        return res.status(400).json({
            message:'Select date'
        });
    }
    const slot_exist=findslot(time,date);
    if(slot_exist)
    {
        res.status(400).json({
            message:'Slot already booked'
        });
    }
    next();
}