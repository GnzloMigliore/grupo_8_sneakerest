const path = require('path');
const fs = require('fs');
const { Op } = require("sequelize");
//const db = require ('../database/models');
//const products = db.products;
const {products, brands, examples, images, imageproducts, sizes} = require ('../database/models');

module.exports = {
    productos: async (req,res) =>{   
        const zapatillas = await products.findAll({include: ['brands', 'examples', 'images']})
        //const imagenes = await images.findAll();   
        //return res.send(zapatillas) 
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});           
    },    
    detail: async (req,res) => {
        const zapatillas = await products.findByPk(req.params.id, {include: ['brands', 'examples', 'images', 'sizes']})
        //return res.send(zapatillas)
        const allZapatillas = await products.findAll({include: ['images']});
        //return res.send (allZapatillas)
        
        res.render(path.resolve(__dirname , '..','views','productos','detalleProducto') , {zapatillas, allZapatillas});
    }    
}