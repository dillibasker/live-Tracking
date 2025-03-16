const io = require("socket.io-client");
const socket = io("http://localhost:5000");

let latitude = 12.9716;
let longitude = 77.5946;

setInterval(() => {
  latitude += (Math.random() - 0.5) * 0.001; // Simulating movement
  longitude += (Math.random() - 0.5) * 0.001;

  socket.emit("updateLocation", { deliveryBoyId: "123", latitude, longitude });
  console.log(`Location updated: ${latitude}, ${longitude}`);
}, 3000);
