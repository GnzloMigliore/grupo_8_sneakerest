
const path = require('path');
const fs = require('fs');

const zapatillas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','zapatillas.json')));

module.exports = {
  contacto: (req,res) => {
    res.render(path.resolve(__dirname, '..', 'views','soporte','contacto'))
  },
  nosotros: (req,res) => {
    res.render(path.resolve(__dirname, '..', 'views','soporte','nosotros'))
  },
  giftcard: (req,res) => {
    res.render(path.resolve(__dirname, '..', 'views','soporte','giftcard'))
  },
  ayuda: (req,res) => {
    res.render(path.resolve(__dirname, '..', 'views','soporte','ayuda'))
  },
  talles: (req,res) => {
    res.render(path.resolve(__dirname, '..', 'views','soporte','talles'))
  }
}