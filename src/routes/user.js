const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir el modulo de los controladores
const controllersUser = require(path.resolve(__dirname, '..', 'controllers', 'controllersUser'));

router.get('/registro', controllersUser.registro);
router.get('/login', controllersUser.login);
router.get('/recover', controllersUser.recover);

module.exports = router;