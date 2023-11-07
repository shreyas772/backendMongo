import dotenv from "dotenv"
import mongoose from 'mongoose'

import connectDB from './db/index.js';

import express from "express"


dotenv.config({
    path:"./env"
})

connectDB()


// const app=express()

// ;(async() => {

//     try{
//          await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//          app.on("error" ,() => {
//             console.log("ERROR :" ,error);
//             throw error
//          })

//          app.listen(process.env.PORT ,() =>{
//             console.log(`App is running on port ${process.env.PORT}`);
//          })
//     }
//     catch(error){
//         console.log("ERROR :" ,error);
//         throw err
//     }

// })  ()