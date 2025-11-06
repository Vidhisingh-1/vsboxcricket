const zod=require("zod");

const signupschemaemail=zod.object({
    email:zod.email(),
    
});
const signupschemapassword=zod.object({
   password:zod.string().min(8),
});


function signup_invalidator(req,res,next){
    const email=req.body.Email;
    const password=req.body.Password;

    const emailvalid=signupschemaemail.safeParse({
        email
    });
    const passwordvalid=signupschemapassword.safeParse({
        password
    })

    if(!emailvalid.success && !passwordvalid.success)
    {
        res.json({
            message:"Email and password input is wrong"
        });
    }
    else if(!emailvalid.success)
    {
        res.json({
            message:"Incorrect email format"
        });
    }
    else if(!passwordvalid.success)
    {
        res.json({
            message:"Incorrect password format"
        });
    }
    next();
}