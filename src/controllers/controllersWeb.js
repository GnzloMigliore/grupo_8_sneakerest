Ezequiel
const path = require('path');
const controllersWeb = {
    index: function(req,res){
        res.sendFile(path.resolve(__dirname, '../views/web/index.html'));
    }

}
module.exports = controllersWeb;

const path = require ('path');

module.exports = {
  index : function(req,res){
      res.sendFile(path.resolve(__dirname, '..', 'views', 'web', 'index.html'));
  }
  ,
  productos: function(req,res){
      res.sendFile(path.resolve(__dirname, '..', 'views', 'productos', 'productos.html'));
  }
}
master
