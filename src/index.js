// require('dotenv').config({path:'./env'});

import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:"/env"
})
connectDB()


































//1)Approach
// import  express  from "express";
// const app=express()
// (async()=>{
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         // below code says that our database is connected but our express app cannot talk to them
//         app.on("error",(error)=>{  //.on is a listner their are many listner 
//             console.log("Error",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("error",error);
//         throw er
//     }
// })()