const path = require('path');
const fs = require('fs');
//const db = require ('../database/models');
//const products = db.products;
const {products, brands, examples} = require ('../database/models');

module.exports = {
    productos: async (req,res) =>{   
        const zapatillas = await products.findAll({include: ['brands', 'examples']})
            //return res.send(zapatillas); 
            res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});           
    },    
    detail: (req,res) => {
        let zapatillas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','zapatillas.json')));
    
        let miZapatilla;
        zapatillas.forEach(zapatilla => {
            if(zapatilla.id == req.params.id){
                miZapatilla = zapatilla;         
            }
        });
        res.render(path.resolve(__dirname, '..','views','productos','detalleProducto'), {miZapatilla})

}    
}