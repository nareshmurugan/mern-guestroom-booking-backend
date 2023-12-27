import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true});
var conn = mongoose.connection;

conn.on('error', ()=>{
    console.log("Connection Failed");
})
conn.on('connected', ()=>{
    console.log("Connection successful");
})

export default mongoose