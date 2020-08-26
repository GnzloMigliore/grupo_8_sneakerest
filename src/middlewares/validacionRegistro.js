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
  ]
