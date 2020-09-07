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
    //check('marca').isLength({min: 4}).withMessage('El campo marca debe tener al menos 4 caracteres'),
    check('marca').not().isEmpty().withMessage('El campo marca no puede estar vacio'),
    check('modelo').isLength({min: 2}).withMessage('El campo modelo debe tener al menos 2 caracteres'),
    check('modelo').not().isEmpty().withMessage('El campo modelo no puede estar vacio'),
    check('descripcion').isLength({min:20}).withMessage('El campo descripción debe tener al menos 20 caracteres'),
    check('descripcion').not().isEmpty().withMessage('El campo descripción no puede estar vacio'),
    //check('genero').not().isEmpty().withMessage('Debe seleccionar un género'),
    //check('color').not().isEmpty().withMessage('Debe seleccionar un color'),
    check('talles').not().isEmpty().withMessage('Debe seleccionar uno o más talles'),
    check('precio').not().isEmpty().withMessage('Debe indicar un precio'),
    check('descuento').not().isEmpty().withMessage('Debe indicar un descuento'),
    check('stock').not().isEmpty().withMessage('Debe indicar el stock'),

    
    
    
    //Aquí obligo a que el usuario seleccione su avatar
    body('imagen').custom(function (value, { req }) {
        let ext
        if(req.files != undefined ){
            return true
        }else{
            ext = ""+path.extname(req.files[0].filename).toLowerCase();
        }
        //console.log('oooooooooooooooooooooooooooooooooooooooooooooooooo' + ext);
        if (
            ext == ".jpg" ||
            ext == ".jpeg" ||
            ext == ".png" ||
            ext == ".gif" ||
            ext == ".webp"
            ){
                return true;
            }
            return false;
        }).withMessage('Debe ingresar 5 imagenes con extensión JPG, JPEG, PNG, GIF o WebP')

    ]
    
    
    
    
    
    