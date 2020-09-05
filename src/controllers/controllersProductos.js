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
    novedades: async (req, res) => {
        const zapatillas = await products.findAll({include: ['brands', 'examples', 'images'], order: [['updatedAt', 'DESC']]});
        //return res.send(zapatillas)
        res.render(path.resolve(__dirname , '..','views','productos','novedades') , {zapatillas});
    },
    vendidos: async (req, res) => {
        
    },
    menor: async (req, res) => {
        const zapatillas = await products.findAll({include: ['brands', 'examples', 'images'], order: [['price', 'ASC']]});
        res.render(path.resolve(__dirname , '..','views','productos','ordenMenorMayor') , {zapatillas});
    },
    mayor: async (req, res) => {
        const zapatillas = await products.findAll({include: ['brands', 'examples', 'images'], order: [['price', 'DESC']]});
        res.render(path.resolve(__dirname , '..','views','productos','ordenMayorMenor') , {zapatillas});
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
    rebook: async (req, res) => {
        let marcas = await brands.findOne({where: {name: 'Rebook'}})
        const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    },
    vans: async (req, res) => {
        let marcas = await brands.findOne({where: {name: 'Vans'}})
        const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
        res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas});
    }
}