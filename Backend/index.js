import { app } from "./app.js"
import connectDB from "./db.js"
import dotenv from "dotenv"


dotenv.config({
    path: "./.env"
})
connectDB().then(()=>{
    app.listen(3000,()=>{
        console.log(`server is running on 3000`)
    })
})
.catch(err=>console.log(err))

export default app

