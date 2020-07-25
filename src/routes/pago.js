const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir el modulo de los controladores
const controllersPago = require(path.resolve(__dirname, '..', 'controllers', 'controllersPago'));

router.get('/carrito', controllersPago.carrito);
router.get('/formularioCompra', controllersPago.form);
router.get('/pago', controllersPago.pago);
router.get('/compraTerminada', controllersPago.terminada);

module.exports = router;