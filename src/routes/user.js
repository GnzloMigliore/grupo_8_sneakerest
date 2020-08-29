const express = require('express');
const router = express.Router();
const path = require('path');
//Requiero el paquete para comparar las contraseñas  que tengo hash (Pueden instalar el paquete bcrypt o bcryptjs)
const bcrypt = require('bcryptjs');
//Requiero fs ya que debo leer el archivo json de usuarios y verificar si el usuario que se está reistrando existe o no
const fs = require('fs');
const multer = require('multer');
//Requiero el paquete expres-validator
const {
  check,
  validationResult,
  body
} = require('express-validator');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '..','..','public','images','usuarios'));
  },
  filename: function (req, file, cb) {
    cb(null, 'usuario-'+Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage });

//Requerir el modulo de los controladores
const controllersUser = require(path.resolve(__dirname, '..', 'controllers', 'controllersUser'));

//Requiero mi base datos
const {users} = require('../database/models')

//Requiero middlewares
const validacionAcceso = require(path.resolve(__dirname, '..', 'middlewares', 'validacionAcceso'));
const validacionRegistro = require(path.resolve(__dirname, '..', 'middlewares', 'validacionRegistro'));

router.get('/login', controllersUser.index);
router.post('/login', validacionAcceso, controllersUser.login)
router.get('/login/registro', controllersUser.create);
router.post('/login/registro', upload.single('imagen'), validacionRegistro, controllersUser.save);
router.get('/logout', controllersUser.logout);
router.get('/perfil', controllersUser.show);
router.get('/perfil/editar/:id', controllersUser.profile);
router.post('/perfil/editar/:id', upload.single('imagen'), controllersUser.update)
router.get('/perfil/editar/delete/:id', upload.single('imagen'), controllersUser.destroy)
//router.put('/perfil/edit/', upload.single('imagen'), controllersUser.update);
//router.get('/recover', controllersUser.recover);

module.exports = router;