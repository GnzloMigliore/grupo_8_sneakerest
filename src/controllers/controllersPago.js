const path = require('path');
const fs = require('fs');

module.exports = {
    carrito: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views', 'pago', 'carrito.html'));
        
    },
    form: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views', 'pago', 'formularioCompra.html'));
    },
    pago: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views', 'pago', 'pago.html'));     
}    
}