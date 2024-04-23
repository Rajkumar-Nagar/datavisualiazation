import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const connectionIndtanse=await mongoose.connect(
          process.env.MONGOURI,
        )
        console.log(`mongoose connected !! DB Host : ${connectionIndtanse.connection.host}` )

    } catch (error) {
        
        console.log("mongoose connection is failed ",error)
    }
}

export default connectDB;