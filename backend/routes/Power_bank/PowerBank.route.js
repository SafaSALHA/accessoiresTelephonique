const express = require("express");
const route = express.Router();
Power_bank = [
  {id:1 ,name: "Power Bank UEELR 3X 10000 Mah With Display" , src:"./assets/images/Power_Bank_UEELR.jpg" , prix:27.000},
  {id:2 ,name: "Power Bank XIAOMI VXN4305GL10000 mAh" , src:"./assets/images/Power_Bank_XIAOMI.jpg" , prix:55.000},
  {id:3 ,name: "Power Bank KINGLEEN G20 20000 mAh" , src:"./assets/images/G20.jpg" , prix:78.000},
  {id:4 ,name: "XIAOMI BHR5460GL 10W Wireless Power Bank" , src:"./assets/images/XIAOMI.jpg" , prix:95.000},
  {id:5 ,name: "Wireless ASPOR A326 15W 10000 Mah" , src:"./assets/images/Wireless.jpg" , prix:119.000},
  {id:6 ,name: "Power Bank XIAOMI BHR5121GL 50W 20000 Mah" , src:"./assets/images/50W.jpg" , prix:199.000},
  {id:7 ,name: "Power Bank ITEL 27000 mAh" , src:"./assets/images/Power_Bank_ITEL.jpg" , prix:149.000},
  {id:8 ,name: "LENOVO GO USB-C Power Bank For Laptop" , src:"./assets/images/LENOVO.jpg" , prix:435.000},
]
route.get("/", (req, res) => {
  res.status(200).json(Power_bank);
});
route.get("/:id", (req, res) => {
  const id = parseInt(req.params.id); // Parse the ID as an integer
  const selectedPowerBank = Power_bank.find(item => item.id === id);

  if (selectedPowerBank) {
    res.status(200).json(selectedPowerBank);
  } else {
    res.status(404).json({ error: "Power bank not found" });
  }
});
module.exports = route;
