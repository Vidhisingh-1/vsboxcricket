const mongoose=require('mongoose');
const { User } = require('../models/user');

async function finduser(email)
{
    await User.findOne({email});
}
module.exports={finduser};