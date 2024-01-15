const express = require("express");
const path = require("path");
const Cases_and_covers = require('./backend/routes/Cases_and_covers/CasesAndCovers.route');
const Earphone = require('./backend/routes/Earphone/earphone.route');
const helmet = require('./backend/routes/helmet/helmet.route');
const Power_bank = require('./backend/routes/Power_bank/PowerBank.route');
const Smartphone_holder = require('./backend/routes/Smartphone_holder/SmartphoneHolder.route');

const app = express();
// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'backend/public')));
app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/public/index.html'));
});
app.get('/helmets', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/public/index.html'));
});
app.get('/helmentDetaille/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/public/index.html'));
});
app.get('/earphones', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/public/index.html'));
});
app.get('/earphoneDetaille/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/public/index.html'));
});
app.get('/Power_bank', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/public/index.html'));
});
app.get('/PowerBankDetaille/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/public/index.html'));
});
app.get('/Cases_and_covers', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/public/index.html'));
});
app.get('/casesDetaille/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/public/index.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/public/index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/public/index.html'));
});
app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/public/index.html'));
});
app.get('/smartphoneHolder', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/public/index.html'));
});
app.get('smartphoneHolderDetaille/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/public/index.html'));
});




// Route for appareils
//app.use("/appareils", routeAppareil);
app.use("/api/casesAndCovers", Cases_and_covers);
app.use("/api/casesAndCovers/:id", Cases_and_covers);
app.use("/api/earphone", Earphone);
app.use("/api/earphone/:id", Earphone);
app.use("/api/helmet", helmet);
app.use("/api/helmet/:id", helmet);
app.use("/api/powerBank", Power_bank);
app.use("/api/powerBank/:id", Power_bank);
app.use("/api/smartphoneHolder", Smartphone_holder);
app.use("/api/smartphoneHolder/:id", Smartphone_holder);

// Serve the Angular app for all other routes


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
