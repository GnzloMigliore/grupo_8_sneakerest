
const path = require('path');
const fs = require('fs');


module.exports = {
  index : function(req,res){
      res.sendFile(path.resolve(__dirname, '..', 'views', 'web', 'index.html'));
  },
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