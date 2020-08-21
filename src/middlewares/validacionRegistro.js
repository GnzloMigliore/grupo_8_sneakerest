const fs = require('fs');
const path = require('path');
const {users} = require('../database/models')
const {
  check,
  validationResult,
  body
} = require('express-validator');

module.exports = [
  //Aquí incoporé otras validaciones, para que las tengan de guía para sus proyectos  
  check('nombre').isLength({
        min: 1
      }).withMessage('El campo nombre no puede estar vacío'),
  check('apellido').isLength({min: 1
      }).withMessage('El campo apellido no puede estar vacío'),
  check('email').isEmail().withMessage('Agregar un email válido'),

  //Aquí valido el Password   
  check('contraseña').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
  //Aquí valido si eusuario existe o no en la tabla de usuarios Por el campo email)
  body('email').custom(function (value) {
    let contador = 0;
    for (let i = 0; i < users.length; i++) {
        //console.log(value);
        if (users[i].email == value) {
            contador++;
        }
    }
    if (contador > 0) {
        return false;
    } else {
        return true;
    }
}).withMessage('Usuario ya se encuentra registrado'),

//Aquí valido la confimación del password dispuesto por el usuario
check('confirmar_contraseña').isLength({min: 6 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 6 caractéres'),

//Aquí valido si las contraseñas son iguales o no
//El ( value ) viene a ser el valor que viaje en el name del del input del campo 
//El valor { req } corresponde a lo que viene desde el formulario

body('confirmar_contraseña').custom((value, {req}) =>{
        if(req.body.password == value ){
            return true    // Si yo retorno un true  no se muestra el error     
        }else{
            return false   // Si retorno un false si se muestra el error
        }    
}).withMessage('Las contraseñas deben ser iguales'),

//Aquí obligo a que el usuario seleccione su avatar
body('imagen').custom(function (value, { req }) {
  let ext
  if(req.file != undefined ){
      return true
  }else{
      ext = ""+path.extname(req.files[0].filename).toLowerCase();
  }
  //console.log(ext);
  if (
      ext == ".jpg" ||
      ext == ".jpeg" ||
      ext == ".png" ||
      ext == ".gif"){
          return true;
      }
      return false;
}).withMessage('Solo adebe seleccionar archivos  con extensión JPG, JPEG, PNG o GIF')
]
