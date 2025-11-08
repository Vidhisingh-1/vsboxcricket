const bcrypt=require('bcrypt');
async function hashpassword(password)
{
    return await bcrypt.hash(10,password);
}
module.exports=hashpassword;