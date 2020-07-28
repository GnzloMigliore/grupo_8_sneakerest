
const path = require('path');
const fs = require('fs');

const zapatillas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','zapatillas.json')));

module.exports = {
  index : (req,res) => {
    let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));  
        res.render(path.resolve(__dirname, '..', 'views', 'web', 'index'), {usuarios});;
  },
  contacto: (req,res) => {
    res.render(path.resolve(__dirname, '..', 'views','web','contacto'))
  },
  email: (req,res) => {
    res.render(path.resolve(__dirname, '..', 'views','web','email'))
  },
  newsletter: (req,res) => {
    res.render(path.resolve(__dirname, '..', 'views','web','newsletter'))
  },
  nosotros: (req,res) => {
    res.render(path.resolve(__dirname, '..', 'views','web','nosotros'))
  },
  giftcard: (req,res) => {
    res.render(path.resolve(__dirname, '..', 'views','web','giftcard'))
  },
  ayuda: (req,res) => {
    res.render(path.resolve(__dirname, '..', 'views','web','ayuda'))
  }
}