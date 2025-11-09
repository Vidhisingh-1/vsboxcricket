const express=require("express");
const { book } = require("../../repository/slotsrepository");

const router=express.Router();

router.post('/book',slotvalidator,async(req,res)=>{
    try{
        const time=req.body.time;
        const date=req.body.date;
        const total_people=req.body.people;
        const booking=book(
            time,date,total_people
        );

        res.status(200).json({
            message:'Booking successful',
            booking_data:{
                time:booking.time,
                date:booking.date,
                total_people:booking.total_people,
            }
        });
    }
    catch(error)
    {
        if (err.code === 11000) {
        return res.status(409).json({ message: 'Slot already booked (race condition)' });
      }
      console.error('booking route error:', err);
      res.status(500).json({ message: 'Server error creating booking' });
    }
});
module.exports=router;