const express=require('express');
const router=express.Router();

const jwt=require('jsonwebtoken');
const { signup_invalidator } = require('../../middlewares/inputvalidator');
const { User } = require('../../models/user');
const { finduser } = require('../../repository/userrepository');

router.post('/signin',signup_invalidator,async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;

        const existingUser=finduser(email);
        if(!existingUser)
        {
            return res.status(404).json({
                message:'User not registered'
            });
        }
        const ispasswordvalid=await bcrypt.compare(password,existingUser.password);
        if(!ispasswordvalid)
        {
            return res.status(400).json({
                message:'Invalid credentials'
            });
        }
        const token=jwt.sign(
            {email:existingUser.email},
            process.env.JWT_SECRET
        );
        res.status(200).json({
            message:'Signin successful',
            token,
            user:{
                email:existingUser.email
            }
        });
    }
    catch(error)
    {
        res.status(500).json({
            message:"Server error"
        });
    }
});
module.exports=router;