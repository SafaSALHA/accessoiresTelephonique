const express = require("express");
const route = express.Router();
Cases_and_covers = [
  {id:1, name: "Silicone Case for HUAWEI GR3 Smartphone" , src:"./assets/images/Silicone.jpg" , prix:5.000 },
  {id:2, name: "Silicone Ear Case for iPhone 6" , src:"./assets/images/iPhone_6.jpg" , prix:10.000},
  {id:3, name: "Silicone Case for Samsung Galaxy A32" , src:"./assets/images/Silicone_Case.jpg" , prix:15.000},
  {id:4, name: "Silicone Case for SAMSUNG Galaxy A72" , src:"./assets/images/Galaxy_A72.jpg" , prix:17.000},
  {id:5, name: "iPhone 13 Pro Case - Purple" , src:"./assets/images/iPhone_13.jpg" , prix:20.000},
  {id:6, name: "Flip Cover TOTU DESIGN For iPhone 7" , src:"./assets/images/iPhone_7.jpg" , prix:25.000},
  {id:7, name: "Flip Cover Samsung Galaxy S6 Edge" , src:"./assets/images/Flip.jpg" , prix:30.000},
  {id:8, name: "Power Protective Case for iPhone 4" , src:"./assets/images/Power.jpg" , prix:35.000},
  {id:9, name: "Original Silicone Case for iPhone XS" , src:"./assets/images/Original.jpg" , prix:39.000},
  {id:10, name: "Original Silicone Case for iPhone 8 Plus" , src:"./assets/images/OriginalSilicone.jpg" , prix:59.000},
  {id:11, name: "Original SAMSUNG Galaxy Silicone Case for Z Flip5" , src:"./assets/images/OriginalSAMSUNG.jpg" , prix:150.000},
  {id:12, name: "SAMSUNG Galaxy S Pen Slim Case For Z Fold5" , src:"./assets/images/samsung-galaxy.jpg" , prix:299.000},
]
route.get("/", (req, res) => {
  res.status(200).json(Cases_and_covers);
});

route.get("/:id", (req, res) => {
  const id = parseInt(req.params.id); // Parse the ID as an integer
  const selectedCases_and_covers = Cases_and_covers.find(item => item.id === id);

  if (selectedCases_and_covers) {
    res.status(200).json(selectedCases_and_covers);
  } else {
    res.status(404).json({ error: "Cases or covers not found" });
  }
});
module.exports = route;
