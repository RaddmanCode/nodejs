const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the index.html file for the root route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde Railway!' });
});

module.exports = router;
