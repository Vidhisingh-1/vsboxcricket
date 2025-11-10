const express=require("express");
const cors=require("cors");
const { connectdb } = require("./config/connectmongodb");
const signin=require('./routes/authroutes/signin');
const signup=require('./routes/authroutes/signup');
const bookslot=require('./routes/slotroutes/bookslot');
const currentslot=require('./routes/slotroutes/currentslot');
const bookinghistory=require('./routes/slotroutes/bookinghistory');

dotenv.config();

const app=express();

app.use(cors());

app.use(express.json());

connectdb();

app.use("/",signin);
app.use("/",signup);
app.use("/",bookslot);
app.use("/",currentslot);
app.use("/",bookinghistory);

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
})