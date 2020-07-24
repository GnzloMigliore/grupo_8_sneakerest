
const path = require('path');
const fs = require('fs');

const zapatillas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','zapatillas.json')));

module.exports = {
  index : function(req,res){
    res.render(path.resolve(__dirname, '..', 'views', 'web', 'index'));
  },
  contacto: function(req,res){
    res.render(path.resolve(__dirname, '..', 'views','web','contacto'))
  },
  email: function(req,res){
    res.render(path.resolve(__dirname, '..', 'views','web','email'))
  },
  newsletter: function(req,res){
    res.render(path.resolve(__dirname, '..', 'views','web','newsletter'))
  },
  nosotros: function(req,res){
    res.render(path.resolve(__dirname, '..', 'views','web','nosotros'))
  },
  giftcard: function(req,res){
    res.render(path.resolve(__dirname, '..', 'views','web','giftcard'))
  },
  ayuda: function(req,res){
    res.render(path.resolve(__dirname, '..', 'views','web','ayuda'))
  }
}