const express=require('express');
const { signup_invalidator } = require('../../middlewares/inputvalidator');
const hashpassword = require('../../service/hashpassword');
const { createnewuser } = require('../../repository/userrepository');
const router=express.Router();

router.post('/signup',signup_invalidator,async(req,res)=>{
    try{
    const email=req.body.email;
        const password=req.body.password;

        const existingUser=finduser(email);
        if(existingUser)
        {
            res.status(400).json({
                message:'User already exists '
            })
        }
        const hashedpassword=hashpassword(password);

        const newUser=createnewuser(email,hashedpassword);

        const token=jwt.sign(
            {email:newUser.email},
            process.env.JWT_secret
        );

        res.status(200).json({
            message:'Signup successful',
            token,
            user:{email:newUser.email}
        });
    }
    catch(error)
    {
        res.status(500).json({
            message:'Server error'
        });
    }
});

module.exports=router;