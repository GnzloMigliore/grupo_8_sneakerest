const express = require('express');
const router = express.Router();
const path = require('path');

Ezequiel
//Requerir el modulo de los controladores
const webController = require(path.resolve(__dirname, '../controllers/controllersWeb.js'));

// Métodos en nuestros controladores: index - show - edit - delete 
router.get('/', controllersWeb.index);

module.exports = router;


const controllerWeb = require(path.resolve(__dirname, '..', 'controllers', 'controllersWeb'));

router.get('/', controllerWeb.index);
router.get('/productos', controllerWeb.productos);

module.exports = router; 
master
