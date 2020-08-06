const express = require('express');
const router = express.Router();
const path = require('path');




const controllersSoporte = require(path.resolve(__dirname, '..', 'controllers', 'controllersSoporte'));


router.get('/contacto', controllersSoporte.contacto);
router.get('/nosotros', controllersSoporte.nosotros);
router.get('/giftcard', controllersSoporte.giftcard);
router.get('/ayuda', controllersSoporte.ayuda);
router.get('/talles', controllersSoporte.talles);

module.exports = router; 
