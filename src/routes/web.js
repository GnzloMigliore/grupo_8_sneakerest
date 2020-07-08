const express = require('express');
const router = express.Router();
const path = require('path');


const controllerWeb = require(path.resolve(__dirname, '..', 'controllers', 'controllersweb'));
//armo mis rutas

router.get('/', controllerWeb.index);
router.get('/newsletter', controllerWeb.newsletter);
router.get('/contacto/email', controllerWeb.email);
router.get('/contacto', controllerWeb.contacto);

module.exports = router; 


