const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir el modulo de los controladores
const webController = require(path.resolve(__dirname, '../controllers/controllersWeb.js'));

// Métodos en nuestros controladores: index - show - edit - delete 
router.get('/', controllersWeb.index);

module.exports = router;