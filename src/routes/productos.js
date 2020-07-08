const express = require('express');
const router = express.Router();
const path = require('path');
const controllersProductos = require('../controllers/controllersProductos');

//Requerir el modulo de los controladores
const controllersPago = require(path.resolve(__dirname, '..', 'controllers', 'controllersPago'));

router.get('/productos', controllersProductos.productos);
router.get('/detalleProducto', controllersProductos.detail);


module.exports = router;