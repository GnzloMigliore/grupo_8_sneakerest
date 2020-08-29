const path = require('path');
const fs = require('fs');
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
        //let category_id = req.params.id;
        //const modelos = await products.findAll({include: ['images']})
        const modelos = await products.findAll({
            where: {example_id: zapatillas.example_id},
            include: ['brands', 'examples', 'images']
        })
        //Promise.all([zapatillas, modelos])
        //return res.send(modelos);
        res.render(path.resolve(__dirname , '..','views','productos','detalleProducto') , {zapatillas, modelos});           
}    
}