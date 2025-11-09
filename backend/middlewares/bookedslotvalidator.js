const slots=["9AM-12PM","12PM-3PM","3PM-6PM","6PM-9PM"];

function slotvalidator(req,res,next){
    const slot=req.body.slot;
    if(slots.includes(slot))
    {
        
    }
}