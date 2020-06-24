const express = require('express');
const router = express.Router();
const path = require('path');


const controllerWeb = require(path.resolve(__dirname, '..', 'controllers', 'controllersWeb'));

router.get('/', controllerWeb.index);
router.get('/productos', controllerWeb.productos);

module.exports = router; 