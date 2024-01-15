const express = require("express");
const route = express.Router();
helmet = [
  {id:1 , name: "Wired Headset Microphone" , src:"./assets/images/Wired_Headset_Microphone.jpg" , prix:9.800},
  {id:2 , name: "OAKORN P47 Bluetooth Wireless Stereo " , src:"./assets/images/OAKORN.jpg" , prix:16.000},
  {id:3 , name: "FREESTYLE FH4088 Wired Headset Microphone" , src:"./assets/images/FREESTYLE.jpg" , prix:19.000},
  {id:4 , name: "Wireless Headset" , src:"./assets/images/Wireless_Headset.jpg" , prix:20.900},
  {id:5 , name: "JEDEL GH-251 RGB Gaming Headset Microphone" , src:"./assets/images/JEDEL.jpg" , prix:36.000},
  {id:6 , name: "Filiare BOROFONE BO101 Stereo" , src:"./assets/images/Filiare.jpg" , prix:46.000},
  {id:7 , name: "VARR VH8030 RGB Gaming Headset Microphone" , src:"./assets/images/VARR.jpg" , prix:65.000},
  {id:8 , name: "HAMA Wireless Headphones" , src:"./assets/images/HAMA_Wireless_Headphones.jpg" , prix:70.000},
  {id:9, name: "Gamer Redragon Pandora H350RGB" , src:"./assets/images/Gamer.jpg" , prix:79.900},
  {id:10 , name: "JBL T500 Wired Headset Microphone" , src:"./assets/images/JBL.jpg" , prix:99.000},
  {id:11 , name: "GUESS Wireless Headphones" , src:"./assets/images/GUESS.jpg" , prix:150.000},
  {id:12 , name: "JBL Wireless Headset Microphone" , src:"./assets/images/JBL_Wireless_Headset_Microphone.jpg" , prix:500.000},

]
route.get("/", (req, res) => {
  res.status(200).json(helmet);
});
// Route to get helmet by ID
route.get("/:id", (req, res) => {
  const id = parseInt(req.params.id); // Parse the ID as an integer
  const selectedHelmet = helmet.find(item => item.id === id);

  if (selectedHelmet) {
    res.status(200).json(selectedHelmet);
  } else {
    res.status(404).json({ error: "Helmet not found" });
  }
});
module.exports = route;
