const express = require('express');
const router = express.Router();
const path = require('path');
const controllersProductos = require('../controllers/controllersProductos');


router.get('/productos', controllersProductos.productos);
router.get('/productos/detalle/:id', controllersProductos.detail);


module.exports = router;