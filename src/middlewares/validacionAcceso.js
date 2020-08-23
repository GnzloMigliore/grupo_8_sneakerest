const bcrypt = require('bcryptjs');
const {users} = require('../database/models');

const {
    check,
    validationResult,
    body
  } = require('express-validator');



module.exports = [
    check('email').isEmail().withMessage('Ingrese un mail válido.'),
    body('email').custom( async (value) =>{
      let user = await users.findOne({
        where: {email: value}
    })
    if (user === null){
        return Promise.reject('El usuario no se encuentra registrado')
    } 
    return true
    }),
    check('contraseña').isLength({min:6}).withMessage('La contraseña debe tener un mínimo de 6 caracteres.'),
    body('contraseña').custom( async (value, {req}) =>{
      let user = await users.findOne({where: {email: req.body.email}})
      if(bcrypt.compareSync(value, user.password)){
        return true;
    } else {
        return false;
    } 
    }).withMessage('Contraseña incorrecta')
]