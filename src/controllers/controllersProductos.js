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
    detail: async (req,res) => {
        const zapatillas = await products.findByPk(req.params.id, {include: ['brands', 'examples']})
        //return res.send(zapatillas);
        res.render(path.resolve(__dirname , '..','views','productos','detalleProducto') , {zapatillas});           

}    
}