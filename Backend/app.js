import express from "express"
import cors from "cors"



const app =express()



app.use(cors({
    origin:"*",
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import  userRouter from "./Routes/user.route.js"

app.use("/api",userRouter)


export {app}
