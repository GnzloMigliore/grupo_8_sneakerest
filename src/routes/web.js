const express = require('express');
const router = express.Router();
const path = require('path');

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//Requerir el modulo de los controladores
const webController = require(path.resolve(__dirname, '../controllers/controllersWeb.js'));
=======
=======
>>>>>>> 636674885a6f186ec0d3a0966d0dca2b7b55b197

const controllerWeb = require(path.resolve(__dirname, '..', 'controllers', 'controllersweb'));
//armo mis rutas

router.get('/', controllerWeb.index);
router.get('/newsletter', controllerWeb.newsletter);
router.get('/contacto/email', controllerWeb.email);
router.get('/contacto', controllerWeb.contacto);

module.exports = router; 
<<<<<<< HEAD
>>>>>>> 636674885a6f186ec0d3a0966d0dca2b7b55b197


<<<<<<< HEAD
module.exports = router;
=======

const controllerWeb = require(path.resolve(__dirname, '..', 'controllers', 'controllersWeb'));

router.get('/', controllerWeb.index);
router.get('/productos', controllerWeb.productos);

module.exports = router; 
>>>>>>> master
=======
>>>>>>> 636674885a6f186ec0d3a0966d0dca2b7b55b197
=======


>>>>>>> 636674885a6f186ec0d3a0966d0dca2b7b55b197
