import mongoose from "mongoose"
import {DB_NAME} from "../Constant.js"
import dotenv from "dotenv"
const connectDB=async()=>{
    try {
       const mongooseConnection= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\n MongoDB connected !! DB HOST: ${mongooseConnection.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit();
    }
}
export default connectDB;