import { app } from "./app.js"
import connectDB from "./db.js"

connectDB().then(()=>{
    app.listen(3000,()=>{
        console.log(`server is running on 3000`)
    })
})
.catch(err=>console.log(err))

