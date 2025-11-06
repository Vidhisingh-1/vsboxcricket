const mongoose=require("mongoose");

const connectdb=async()=>{
    try{
        await mongoose.connect("process.env.MONGO_URL");
        console.log("Mongodb connected");
    }

    catch(error){
        console.log("Error connecting to mongodb");
    }
    
}
module.exports={connectdb};

