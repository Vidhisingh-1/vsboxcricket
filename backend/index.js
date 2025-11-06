const express=require("express");
const cors=require("cors");
const { connectdb } = require("./config/connectmongodb");

dotenv.config();

const app=express();

app.use(cors());

app.use(express.json());

connectdb();

app.use("/api/authroutes",authroutes);
app.use("/api/slotroutes",slotroutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
})