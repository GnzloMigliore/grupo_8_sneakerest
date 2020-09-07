
const path = require('path');
const fs = require('fs');

const zapatillas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','zapatillas.json')));

module.exports = {
  index : (req,res) => {
    res.render(path.resolve(__dirname, '..', 'views', 'web', 'index'));
  },
  newsletter: (req,res) => {
    res.render(path.resolve(__dirname, '..', 'views','web','newsletter'))
  },
  noticias: (req,res) => {
    res.render(path.resolve(__dirname, '..', 'views','web','noticias'))
  },
  recover: (req, res) => {
    res.render(path.resolve(__dirname, '..', 'views','usuarios','recover'))
  }
}