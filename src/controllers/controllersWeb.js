<<<<<<< HEAD
<<<<<<< HEAD
const path = require('path');
const controllersWeb = {
    index: function(req,res){
        res.sendFile(path.resolve(__dirname, '../views/web/index.html'));
    }

}
module.exports = controllersWeb;
=======
=======
>>>>>>> 636674885a6f186ec0d3a0966d0dca2b7b55b197
const path = require ('path');
const fs = require('fs');


module.exports = {
  index : function(req,res){
      res.sendFile(path.resolve(__dirname, '..', 'views', 'web', 'index.html'));
  }
  ,
<<<<<<< HEAD
  productos: function(req,res){
      res.sendFile(path.resolve(__dirname, '..', 'views', 'productos', 'productos.html'));
  }
}
>>>>>>> master
=======
  contacto: function(req,res){
    res.sendFile(path.resolve(__dirname, '..', 'views','web','contacto.html'))
},
  email: function(req,res){
  res.sendFile(path.resolve(__dirname, '..', 'views','web','email.html'))
},
  newsletter: function(req,res){
  res.sendFile(path.resolve(__dirname, '..', 'views','web','newsletter.html'))
}
}
>>>>>>> 636674885a6f186ec0d3a0966d0dca2b7b55b197
