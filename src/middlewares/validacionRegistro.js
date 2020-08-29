const fs = require('fs');
const path = require('path');
const {users} = require('../database/models')
const {
  check,
  validationResult,
  body
} = require('express-validator');

let archivoUsuarios = users.findAll();

module.exports = [
    
    //Aquí incoporé otras validaciones, para que las tengan de guía para sus proyectos  
    check('nombre').isLength({min: 2}).withMessage('El campo nombre debe tener al menos 2 caracteres'),
    check('nombre').not().isEmpty().withMessage('El campo nombre no puede estar vacio'),
    check('apellido').isLength({min: 2}).withMessage('El campo apellido debe tener al menos 2 caracteres'),
    check('apellido').not().isEmpty().withMessage('El campo apellido no puede estar vacio'),
    check('telefono').isLength({min:8}).withMessage('Ingrese un número de teléfono válido (Ej: 12345678)'),
    check('telefono').not().isEmpty().withMessage('El campo telefono no puede estar vacio'),
    check('email').isEmail().withMessage('Agregar un email válido'),
    check('email').not().isEmpty().withMessage('El campo email no puede estar vacio'),
    body('email').custom( (value) =>{
      for (let i = 0; i < archivoUsuarios.length; i++) {
        if (archivoUsuarios[i].email == value) {
          return false    //Si esto se cumple entonces muestra el mensaje de error
        }
      }
      return true   //De no encontrase el email entonces no muestra el mensaje de errror
    }).withMessage('Usuario ya se encuentra registrado...'),  
    
    //Aquí valido el Password   
    check('contraseña').isLength({min: 8 }).withMessage('La contraseña debe tener un mínimo de 8 caractéres'),
    check('contraseña').not().isEmpty().withMessage('El campo contraseña no puede estar vacio'),
    check('genero').not().isEmpty().withMessage('Debe elegir su género'),
    
    //Aquí valido la confimación del password dispuesto por el usuario
    check('confirmar_contraseña').isLength({min: 8 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 8 caractéres'),
    check('confirmar_contraseña').not().isEmpty().withMessage('El campo repetir contraseña no puede estar vacio'),
    
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
    body('imagen').custom(function (value, { req }) {
      let ext
      if(req.file == undefined ){
          return true
      }else{
          ext = ""+path.extname(req.file.filename).toLowerCase();
      }
      console.log('oooooooooooooooooooooooooooooooooooooooooooooooooo' + ext);
      if (
          ext == ".jpg" ||
          ext == ".jpeg" ||
          ext == ".png" ||
          ext == ".gif"
          ){
            return true;
          }
          return false;
    }).withMessage('La imagen debe tener extensión JPG, JPEG, PNG o GIF'),

    check('terminos').not().isEmpty().withMessage('Debe aceptar los términos y condiciones')
]


  
  

