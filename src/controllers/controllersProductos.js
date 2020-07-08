const path = require('path');
const fs = require('fs');

module.exports = {
    productos: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views', 'productos', 'productos.html'));
        
    },
    detail: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views', 'productos', 'detalleProducto.html'));
}    
}