//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config({
    path:'./env'
})
connectDB()














/*
import express from "express"
const app=express()
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}`)
        app.on("error",(error)=>{
            console.log("ERRRR:",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`APP IS LISTNING ON PORT ${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR : ",error)
        throw err
    }
})()
    */