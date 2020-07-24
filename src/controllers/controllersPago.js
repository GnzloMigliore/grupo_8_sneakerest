const path = require('path');
const fs = require('fs');

module.exports = {
    carrito: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views', 'pago', 'carrito'));
        
    },
    form: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views', 'pago', 'formularioCompra'));
    },
    pago: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views', 'pago', 'pago'));     
    },
    terminada: function (req, res){
        res.render(path.resolve(__dirname, '..', 'views', 'pago', 'compraTerminada'))
    }    
}