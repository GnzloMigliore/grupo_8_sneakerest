const path = require('path');
const fs = require('fs');

const zapatillas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','zapatillas.json')));

module.exports = {
    index: (req,res) =>{     
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'administrar'), {zapatillas: zapatillas});
    },
    create: (req, res) => {
        res.render(path.resolve(__dirname, '..','views','admin','create'));
    }
}