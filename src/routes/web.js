const express = require('express');
const router = express.Router();
const path = require('path');




const controllersWeb = require(path.resolve(__dirname, '..', 'controllers', 'controllersweb'));
//armo mis rutas

router.get('/', controllersWeb.index);
router.get('/newsletter', controllersWeb.newsletter);
router.get('/contacto/email', controllersWeb.email);
router.get('/contacto', controllersWeb.contacto);
router.get('/nosotros', controllersWeb.nosotros);
router.get('/giftcard', controllersWeb.giftcard);
router.get('/ayuda', controllersWeb.ayuda);

module.exports = router; 
