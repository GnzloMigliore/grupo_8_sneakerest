const path = require('path');
const fs = require('fs');
const { Op } = require("sequelize");
const sequelize = require("sequelize");
//const db = require ('../database/models');
//const products = db.products;
const {products, brands, examples, images, imageproducts, sizes} = require ('../database/models');
const { randomBytes } = require('crypto');

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
        
        //return res.send(allZapatillas);
        
        res.render(path.resolve(__dirname , '..','views','productos','detalleProducto') , {zapatillas, allZapatillas});
    },
    /***** Acá arrancan los filtros *****/
    novedades: async (req, res) => {
        const zapatillas = await products.findAll({where: {updatedAt:  {[Op.gte]: '2020-09-05 19:38:51'}}, include: ['brands', 'examples', 'images'], order: [['updatedAt', 'DESC']]});
        //return res.send(zapatillas)
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    },
    sale: async (req, res) => {
        const zapatillas = await products.findAll({where: {discount: {[Op.gt]: '0'}}, include: ['brands', 'examples', 'images'], order: [['updatedAt', 'DESC']]});
        //return res.send(zapatillas)
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    },
    hombre: async (req, res) => {
        const zapatillas = await products.findAll({where: {gender: 'hombre'}, include: ['brands', 'examples', 'images']});
        //return res.send(zapatillas)
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    },
    mujer: async (req, res) => {
        const zapatillas = await products.findAll({where: {gender: 'mujer'}, include: ['brands', 'examples', 'images']});
        //return res.send(zapatillas)
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    },
    ninos: async (req, res) => {
        const zapatillas = await products.findAll({where: {gender: 'niños'}, include: ['brands', 'examples', 'images']});
        //return res.send(zapatillas)
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    },
    menor: async (req, res) => {
        const zapatillas = await products.findAll({include: ['brands', 'examples', 'images'], order: [['price', 'ASC']]});
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    },
    mayor: async (req, res) => {
        const zapatillas = await products.findAll({include: ['brands', 'examples', 'images'], order: [['price', 'DESC']]});
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    },
    //Filtros por marca
    adidas: async (req, res) => {
        let marcas = await brands.findOne({where: {name: 'Adidas'}})
        const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    },
    converse: async (req, res) => {
        let marcas = await brands.findOne({where: {name: 'Converse'}})
        const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    },
    dcShoes: async (req, res) => {
        let marcas = await brands.findOne({where: {name: 'DC Shoes'}})
        const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    },
    newBalance: async (req, res) => {
        let marcas = await brands.findOne({where: {name: 'New Balance'}})
        const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    },
    nike: async (req, res) => {
        let marcas = await brands.findOne({where: {name: 'Nike'}})
        const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    },
    reebok: async (req, res) => {
        let marcas = await brands.findOne({where: {name: 'Reebok'}})
        const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    },
    vans: async (req, res) => {
        let marcas = await brands.findOne({where: {name: 'Vans'}})
        const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    }
}