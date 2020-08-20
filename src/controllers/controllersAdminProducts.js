const path = require('path');
const fs = require('fs');
const { Op } = require("sequelize");
const {products, brands, examples, images, imageproducts, genders} = require ('../database/models');



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
        //return res.send(req.files)
        const zapatillas = await products.findAll();
        const marcas = await brands.findAll({where: {name: {[Op.like]: req.body.marca}}});
        const modelos = await examples.findAll({where: {name: {[Op.like]: req.body.modelo}}});
        const generos = await genders.findAll({where: {name: {[Op.like]: req.body.genero}}});
        let marcas_body = null;
        if(marcas.length > 1){
            marcas_body = marcas[0].id;
        } else {
            await brands.destroy({where: {name: req.body.marca}})
            let newBrand = await brands.create({name: req.body.marca})
            marcas_body = newBrand.id;
        }
        let modelos_body = null;
        if(modelos.length > 1){
            modelos_body = modelos[0].id 
        } else {
            await examples.destroy({where: {name: req.body.modelo}})
            let newModelo = await examples.create({name: req.body.modelo})
            modelos_body = newModelo.id
        }
        let generos_body = null;
        if (generos.length > 1){
            generos_body = generos[0].id;
        } else {
            await genders.destroy({where: {name: req.body.genero}})
            let newGenero = await genders.create({name: req.body.genero})
            generos_body = newGenero.id;
        }
        
        const zapatillas_body = { 
            //return res.send(_body);
            price: req.body.precio,
            //discount: req.body.descuento,
            description: req.body.descripcion,
            color: req.body.color,
            stock: req.body.descuento,
            brand_id: marcas_body,
            example_id: modelos_body,
            gender_id: generos_body
        }
        let newImages = [];
        req.files.forEach(async image => {
            let newImage = await images.create({filename: image.filename})
            newImages.push(newImage.id)
        });
        //return res.send(zapatillas_body);
        let newZapatilla = await products.create(zapatillas_body)
        //hay que hacer el modelo imageProducts
        newImages.forEach(async imagen => {
            imageproducts.create({image_id: imagen, product_id: newZapatilla.id})           
        })
        
        //return res.send({newZapatilla, newImages})
        res.redirect(`/productos/detalle/${newZapatilla.id}`);
        //res.redirect('/adminProducts')*/
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
    
    //Agregar varias iamgenes
    //crear array con id de las  imagenes que el producto actualmente tiene
    //despues recorrer ese array y eliminar las relaciones donde coincida la imagen del producto con el producto(imgID con el Array)
    // despues denuevo guardarlas en la tabla intermedia agregando al nuevo array las nuevas que se eliminan
    // opcion buscarlas en la carpeta y eliminarlas fisicamente (fs unlink)
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
        if (modelos.length > 1){
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
        //hay que hacer el modelo imageProducts
        
        //return res.send(newZapatilla)
        res.redirect(`/productos/detalle/${newZapatilla.id}`);
        //res.redirect('/adminProducts')
    }     
    
}
