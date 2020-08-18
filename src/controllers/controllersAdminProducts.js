const path = require('path');
const fs = require('fs');
const { Op } = require("sequelize");
const {products, brands, examples} = require ('../database/models');


module.exports = {
    index: async (req,res) =>{   
        const zapatillas = await products.findAll({include: ['brands', 'examples']})
        //return res.send(zapatillas); 
        res.render(path.resolve(__dirname , '..','views','admin','administrarProductos') , {zapatillas});           
    },
    create: (req, res) => {
        res.render(path.resolve(__dirname, '..','views','admin','createProductos'));
    },
    save: async (req,res)=>{
        const zapatillas = await products.findAll();
        const marcas = await brands.findAll({where: {name: {[Op.like]: req.body.marca}}});
        const modelos = await examples.findAll({where: {name: {[Op.like]: req.body.modelo}}});
        let marcas_body = null;
        let modelos_body = null;
        if(marcas.length > 1){
            marcas_body = marcas[0].id;
        } else {
            let newBrand = await brands.create({name: req.body.marca})
            marcas_body = newBrand.id;
        }
        if(modelos.length > 1){
            modelos_body = modelos[0].id 
        } else {
            let newModelo = await examples.create({name: req.body.modelo})
            modelo_body = newModelo.id
        }
        const zapatillas_body = { 
            //return res.send(_body);
            price: req.body.precio,
            //discount: req.body.descuento,
            description: req.body.descripcion,
            image: req.file ? req.file.filename : '',
            stock: req.body.descuento,
            brand_id: marcas_body,
            example_id: modelos_body
        }
        
        //return res.send(zapatillas_body);
        let newZapatilla = await products.create(zapatillas_body)
        res.redirect(`/productos/detalle/${newZapatilla.id}`);
        //res.redirect('/adminProducts')
    },
    show: async (req,res)=>{
        const zapatillas = await products.findByPk(req.params.id, {include: ['brands', 'examples']});
        //return res.send(zapatillas);
        res.render(path.resolve(__dirname , '..','views','admin','detailProducto') , {zapatillas});    
        
    },
    destroy: async (req, res) => {
        let destroyZapatilla = await products.destroy({where: {id: req.params.id}, force: true})
        res.redirect('/adminProducts')
    },
    edit: async (req,res) => {
        const zapatillas = await products.findByPk(req.params.id, {include: ['brands', 'examples']})
        //return res.send(zapatillas);
        res.render(path.resolve(__dirname , '..','views','admin','editProductos') , {zapatillas});                       
        
    },
    updateZapatillas: async (req,res) => {
        const zapatillas = await products.findAll();
        const marcas = await brands.findAll({where: {name: {[Op.like]: req.body.marca}}});
        const modelos = await examples.findAll({where: {name: {[Op.like]: req.body.modelo}}});
        let marcas_body = null;
        let modelos_body = null;
        if (marcas.length > 1){
            let actualizarBrand = await brands.update({name: req.body.marca})
            marcas_body = actualizarBrand.id
            //marcas_body = marcas[0].id;
        } else {
            let newBrand = await brands.create({name: req.body.marca})
            marcas_body = newBrand.id;
        }
        if (examples.length > 1){
            let actualizarExample = await examples.update({name: req.body.modelo})
            modelos_body = actualizarExample.id
            //modelos_body = marcas[0].id;
        } else {
            let newExample = await examples.create({name: req.body.marca})
            modelos_body = newExample.id;
        }
        const zapatillas_body = { 
            //return res.send(_body);
            price: req.body.precio,
            description: req.body.descripcion,
            image: req.file ? req.file.filename : req.body.oldImagen,
            stock: req.body.descuento,
            brand_id: marcas_body,
            example_id: modelos_body
        }
        //return res.send(zapatillas_body);
        let newZapatilla = await products.update(zapatillas_body, {where: {id: req.params.id}})
        //return res.send(newZapatilla)
        res.redirect(`/productos/detalle/${newZapatilla.id}`);
        //res.redirect('/adminProducts')
    }     
        
}
    