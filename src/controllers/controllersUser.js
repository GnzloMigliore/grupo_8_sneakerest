const path = require('path');
const fs = require('fs');

module.exports = {
    registro: function (req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views', 'usuarios', 'registro.html'));
    },
    login: function(req,res){
        res.sendFile(path.resolve(__dirname,'..','views','usuarios','login.html'))
    },
    recover:   function(req,res){
    res.sendFile(path.resolve(__dirname,'..','views','usuarios','recover.html'))
}
}