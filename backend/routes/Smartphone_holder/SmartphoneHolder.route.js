const express = require("express");
const route = express.Router();
Smartphone_holder = [
  {id:1 , name: "Support Smartphone à Ventouse" , src:"./assets/images/Support_Smartphone_Ventouse.jpg" , prix:10.000},
  {id:2 , name: "TTEC 2TT12 Smartphone Holder" , src:"./assets/images/Smartphone_Holder.jpg" , prix:25.000},
  {id:3 , name: "KSIX Universal B9000SE01 Desk Holder " , src:"./assets/images/Smartphone.jpg" , prix:35.000},
  {id:4 , name: "SANDBERG 134-29 With Motion Tracking" , src:"./assets/images/SANDBERG.jpg" , prix:154.000},
]
route.get("/", (req, res) => {
  res.status(200).json(Smartphone_holder);
});


route.get("/:id", (req, res) => {
  const id = parseInt(req.params.id); // Parse the ID as an integer
  const selectedSmartphoneHolder = Smartphone_holder.find(item => item.id === id);

  if (selectedSmartphoneHolder) {
    res.status(200).json(selectedSmartphoneHolder);
  } else {
    res.status(404).json({ error: "Smartphone Holder not found" });
  }
});
module.exports = route;
