const express = require("express");
const route = express.Router();
Earphone = [
  {id:1 ,name: "KINGLEEN I12 Wired Earphones" , src:"./assets/images/KINGLEEN.jpg" , prix:5.000},
  {id:2 ,name: "INKAX EP-22 Wired Earphones" , src:"./assets/images/Ecouteurs.jpg" , prix:8.500},
  {id:3 ,name: "Wired Earphones" , src:"./assets/images/Ecouteurs_Filaires.jpg" , prix:14.800},
  {id:4 ,name: "XIAOMI Mi Basic Wired Earphones" , src:"./assets/images/Écouteurs_Filaires_XIAOMI_MiBasic.jpg" , prix:17.000},
  {id:5 ,name: "EC-IOS12 Wired Earphones" , src:"./assets/images/EC-IOS12.jpg" , prix:19.900},
  {id:6 ,name: "TRAXDATA M07 Jack Wired Earphones" , src:"./assets/images/Écouteurs_Filaires_Jack.jpg" , prix:20.900},
  {id:7 ,name: "JBL T110 Wired In-Ear Headphones" , src:"./assets/images/JBLJBL_T110.jpg" , prix:38.000},
  {id:8 ,name: "APPLE Wired Headphones IPhone Hands-Free Kit" , src:"./assets/images/APPLE.jpg" , prix:40.000},
  {id:9 ,name: "ENERGY SISTEM Sport Wired Headphones 429356" , src:"./assets/images/ENERGY.jpg" , prix:59.000},
  {id:10 ,name: "BIGBEN Lightning In-Ear Wired Earphones" , src:"./assets/images/BIGBEN.jpg" , prix:99.000},
  {id:11 ,name: "JBL Bluetooth Tune T205BT Headphones" , src:"./assets/images/Ecouteurs_JBL.jpg" , prix:35.000},
  {id:12 ,name: "ONEPLUS Wireless Z Wireless Headphones" , src:"./assets/images/ONEPLUS.jpg" , prix:59.000},


]
route.get("/", (req, res) => {
  res.status(200).json(Earphone);
});

route.get("/:id", (req, res) => {
  const id = parseInt(req.params.id); // Parse the ID as an integer
  const selectedEarphone = Earphone.find(item => item.id === id);

  if (selectedEarphone) {
    res.status(200).json(selectedEarphone);
  } else {
    res.status(404).json({ error: "Earphone not found" });
  }
});
module.exports = route;
