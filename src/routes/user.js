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

//Aquí aperturo mi archivo de usuarios, ya que al registrarse un usuario es conveniente buscar que no exista una ya registrado con el mismo email o id o el campo que utlicen para identificar al usuario.
let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')))

router.get('/login', controllersUser.index);
router.post('/login',[
  check('email').isEmail().withMessage('Debe agregar un email válido'),
  body('email').custom( (value) =>{
    for (let i = 0; i < archivoUsuarios.length; i++) {
      if (archivoUsuarios[i].email == value) {
        
        return true    
      }
    }
    return false   
  }).withMessage('¡Ups...! El usuario no se encuentra registrado'),
  check('contraseña').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
  body('contraseña').custom((value, {req}) =>{
    for (let i = 0; i < archivoUsuarios.length; i++) {
      if (archivoUsuarios[i].email == req.body.email) {
        if(bcrypt.compareSync(value,archivoUsuarios[i].contraseña)){
          return true
        }else{
          return false
        }
      }
    }
  }).withMessage('¡Ups...! Las contraseñas no coinciden')
], controllersUser.login)
router.get('/login/registro', controllersUser.create);
router.post('/login/registro', upload.single('imagen'),[
  //Aquí incoporé otras validaciones, para que las tengan de guía para sus proyectos  
  check('nombre').isLength({
    min: 1
  }).withMessage('El campo nombre no puede estar vacío'),
  check('apellido').isLength({min: 1
  }).withMessage('El campo apellido no puede estar vacío'),
  check('email').isEmail().withMessage('Agregar un email válido'),
  body('email').custom( (value) =>{
    for (let i = 0; i < archivoUsuarios.length; i++) {
      if (archivoUsuarios[i].email == value) {
        return false    //Si esto se cumple entonces muestra el mensaje de error
      }
    }
    return true   //De no encontrase el email entonces no muestra el mensaje de errror
  }).withMessage('Usuario ya se encuentra registrado...'),
  
  //Aquí valido el Password   
  check('contraseña').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
  
  //Aquí valido la confimación del password dispuesto por el usuario
  check('confirmar_contraseña').isLength({min: 6 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 6 caractéres'),
  
  //Aquí valido si las contraseñas son iguales o no
  //El ( value ) viene a ser el valor que viaje en el name del del input del campo 
  //El valor { req } corresponde a lo que viene desde el formulario
  
  body('confirmar_contraseña').custom((value, {req}) =>{
    if(req.body.contraseña == value ){
      return true    // Si yo retorno un true  no se muestra el error     
    }else{
      return false   // Si retorno un false si se muestra el error
    }    
  }).withMessage('Las contraseñas deben ser iguales'),
  
  //Aquí obligo a que el usuario seleccione su avatar
  body('imagen').custom((value, {req}) =>{
    if(req.file != undefined){
      return true
    }
    return false;
  }).withMessage('Debe elegir su avatar y debe ser un archivo con formato: .JPG ó JPEG ó PNG')
],controllersUser.save);
router.get('/logout', controllersUser.logout);
router.get('/perfil', controllersUser.show);
//router.put('/perfil/edit/', upload.single('imagen'), controllersUser.update);
//router.get('/recover', controllersUser.recover);

module.exports = router;