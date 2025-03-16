
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import MapComponent from "./MapComponent";

const socket = io("http://localhost:5000");
function App() {
 const [deliveryLocation,setDeliveryLocation]=useState(null)

  useEffect(()=>{
    socket.on("locationUpdate",({lantitude,longitude})=>{
      setDeliveryLocation({lantitude,longitude})
    })
    return ()=>socket.disconnect()
  },[])

  return (
    <>
      <div>
      <h2>Live Delivery Tracking</h2>
      <MapComponent deliveryLocation={deliveryLocation} />
    </div>
    </>
  )
}

export default App
