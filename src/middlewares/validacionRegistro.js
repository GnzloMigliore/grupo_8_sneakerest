const fs = require('fs');
const path = require('path');
const {users} = require('../database/models')
const {
  check,
  validationResult,
  body
} = require('express-validator');

module.exports = [
    check('nombre').isLength({
        min: 1
    }).withMessage('El campo Nombre no puede estar vacio.'),
    check('lastName').isLength({
        min: 1
    }).withMessage('El campo Apellido no puede estar vacio.'),


]
