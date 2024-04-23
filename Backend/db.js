import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const connectionIndtanse=await mongoose.connect(
            "mongodb+srv://rajkumarnagar264:raj123@cluster0.mvrxctz.mongodb.net/RestApi"
        )
        console.log(`mongoose connected !! DB Host : ${connectionIndtanse.connection.host}` )

    } catch (error) {
        
        console.log("mongoose connection is failed ",error)
    }
}

export default connectDB;