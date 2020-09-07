const express = require('express');
const router = express.Router();
const path = require('path');




const controllersWeb = require(path.resolve(__dirname, '..', 'controllers', 'controllersweb'));
//armo mis rutas

router.get('/', controllersWeb.index);
router.get('/newsletter', controllersWeb.newsletter);
router.get('/noticias', controllersWeb.noticias);
router.get('/recover', controllersWeb.recover)
module.exports = router; 
