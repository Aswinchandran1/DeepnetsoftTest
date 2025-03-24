const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/db');
const menuRouter = require('./Routes/menuRoutes');
require('dotenv').config()
connectDB()

const server=express()

server.use(cors())
server.use(express.json())
server.use(menuRouter)

server.get("/",(req,res)=>{
    res.send("Server is Running")
})

const PORT=process.env.PORT||5000

server.listen(PORT,()=>{
    console.log(`Server is running in Port ${PORT}`);
})
