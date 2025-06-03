const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the index.html file for the root route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post("/saludo", (req, res) => {
  const { nombre } = req.body;
  res.json({ mensaje: `Hola, ${nombre}` });
});

module.exports = router;
