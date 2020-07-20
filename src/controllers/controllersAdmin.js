const path = require('path');
const fs = require('fs');


module.exports = {
    index: (req,res) =>{
        //res.send('Estamos por aqui en el Administrador');
     
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'administrar'));
    },
    create: (req, res) =>{
        let relojes =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','relojes.json')));
        res.render(path.resolve(__dirname, '..','views','admin','create'));
    }
}