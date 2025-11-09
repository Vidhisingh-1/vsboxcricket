const mongoose=require('mongoose');
const { User } = require('../models/user');

async function finduser(email)
{
    return await User.findOne({email});
}
async function createnewuser(email,hashedpassword)
{
    const createduser=await User.create({
        email,
        password:hashedpassword,
    })
    return createduser;
}
module.exports={finduser,createnewuser};