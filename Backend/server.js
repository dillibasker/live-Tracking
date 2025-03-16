const express = require("express")
const cors=require("cors")
const http=require("http")
const {Server}=require("socket.io")

const app=express()
const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:"*",
    }
})

app.use(cors())

let deliveryboy={}

io.on("connection",(socket)=>{
    console.log("a user connected")

    socket.on("updateLocation",({deliveryBoyId,latitude,longitude}) =>{
        deliveryboy[deliveryBoyId]= {latitude,longitude};
        io.emit("locationUpdate",({deliveryBoyId,latitude,longitude}))
    })

    socket.io("disconnect",()=>{
        console.log("A user disconnected")
    })
})

const PORT =process.env.PORT || 5000
server.listen(PORT,()=>{console.log(`Server is connected in ${PORT}`)})