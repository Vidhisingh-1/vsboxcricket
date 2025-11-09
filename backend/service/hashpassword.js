const bcrypt=require('bcrypt');
async function hashpassword(password)
{
    return await bcrypt.hash(12,password);
}
module.exports=hashpassword;