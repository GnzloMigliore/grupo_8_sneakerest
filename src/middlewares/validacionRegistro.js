const fs = require('fs');
const path = require('path');
let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));

module.exports = (req, res, next){
    check('nombre').isLength({
        min: 1
      }).withMessage('El campo nombre no puede estar vacío'),
    check('apellido').isLength({min: 1
      }).withMessage('El campo apellido no puede estar vacío'),
    check('email').isEmail().withMessage('Agregar un email válido'),

    //Aquí valido el Password   
    check('contraseña').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
    
    //Aquí valido la confimación del password dispuesto por el usuario
    check('confirmar_contraseña').isLength({min: 6 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 6 caractéres'),
}