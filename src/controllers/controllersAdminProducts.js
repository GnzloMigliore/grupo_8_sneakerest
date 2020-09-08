const path = require('path');
const fs = require('fs');
const { Op } = require("sequelize");
const {products, brands, examples, images, imageproducts, sizes, productsize} = require ('../database/models');
const {
    check,
    validationResult,
    body
} = require('express-validator');


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
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            //return res.send(errors.mapped())
            return res.render(path.resolve(__dirname, '..','views','admin','createProductos'), {
                errors: errors.mapped(),  old: req.body});
            }
            //return res.send(req.files)
            const zapatillas = await products.findAll();
            const marcas = await brands.findAll({where: {name: {[Op.like]: req.body.marca}}});
            const modelos = await examples.findAll({where: {name: {[Op.like]: req.body.modelo}}});
            
            let marcas_body = null;
            if(marcas.length >= 1){
                marcas_body = marcas[0].id 
            } else {
                //await brands.destroy({where: {name: req.body.marca}})
                let newBrand = await brands.create({name: req.body.marca})
                marcas_body = newBrand.id;
            }
            let modelos_body = null;
            if(modelos.length >= 1){
                modelos_body = modelos[0].id 
            } else {
                //await examples.destroy({where: {name: req.body.modelo}})
                let newModelo = await examples.create({name: req.body.modelo})
                modelos_body = newModelo.id
            }
            
            const zapatillas_body = { 
                //return res.send(_body);
                price: req.body.precio,
                discount: req.body.descuento,
                description: req.body.descripcion,
                color: req.body.color,
                stock: req.body.stock,
                gender: req.body.genero,
                brand_id: marcas_body,
                example_id: modelos_body
            }
            
            let newImages = [];
            req.files.forEach(async image => {
                let newImage = await images.create({filename: image.filename})
                newImages.push(newImage.id)
            });
            
            
            let newTalles = [];
            req.body.talles.forEach(async talle => {
                let talleNuevo = await sizes.create({number: talle})
                newTalles.push(talleNuevo.id)
                //console.log('oooooooooooooooooooooooooooooooooooooo    ' + talleNuevo)
            });
            
            let newZapatilla = await products.create(zapatillas_body)
            newImages.forEach(async imagen => {
                imageproducts.create({image_id: imagen, product_id: newZapatilla.id})           
            })   
            
            newTalles.forEach(async size => { productsize.create({size_id: size, product_id: newZapatilla.id})})   

            res.redirect(`/productos/detalle/${newZapatilla.id}`);  
        },
        show: async (req,res)=>{
            const zapatillas = await products.findByPk(req.params.id, {include: ['brands', 'examples', 'images', 'sizes']});
            //return res.send(zapatillas);
            res.render(path.resolve(__dirname , '..','views','admin','detailProducto') , {zapatillas});    
            
        },
        destroy: async (req, res) => {
            let destroyZapatilla = await products.destroy({where: {id: req.params.id}, force: true})
            await imageproducts.destroy ({where: {product_id: req.params.id}, force: true})
            let idImageDestroy = await imageproducts.findAll({where: {id: req.params.id}});
            idImageDestroy.forEach(async image => {
                let destroyImageLocal = await images.findOne({ where: { id: fila.image_id } })
                fs.unlink(path.resolve(__dirname, '../../public/images/zapatillas/' + destroyImageLocal.name), (err) => {
                  if (err) { console.log(err) };
                  console.log('../../public/images/zapatillas/' + destroyImageLocal.name + ' fue borrada');
                })
                await images.destroy({ where: { id: image.image_id }, force: true })
              })
            res.redirect('/adminProducts')
        },
        edit: async (req,res) => {
            const zapatillas = await products.findByPk(req.params.id, {include: ['brands', 'examples', 'images', 'sizes']})
            //return res.send(zapatillas);
            res.render(path.resolve(__dirname , '..','views','admin','editProductos') , {zapatillas});                       
            
        },
        updateZapatillas: async (req,res) => {
            let errors = validationResult(req);
            if(!errors.isEmpty()){
                //return res.send(errors.mapped())
                return res.render(path.resolve(__dirname, '..','views','admin','editProductos'), {errors: errors.mapped(),  old: req.body});
            }
            
            const zapatillas = await products.findAll();
            const marcas = await brands.findAll({where: {name: {[Op.like]: req.body.marca}}});
            const modelos = await examples.findAll({where: {name: {[Op.like]: req.body.modelo}}});
            let marcas_body = null;
            let modelos_body = null;
            if (marcas.length >= 1){
                marcas_body = marcas[0].id
            } else {
                let newBrand = await brands.create({name: req.body.marca})
                marcas_body = newBrand.id;
            }
            if (modelos.length >= 1){
                modelos_body = modelos[0].id
                //modelos_body = marcas[0].id;
            } else {
                let newExample = await examples.create({name: req.body.modelo})
                modelos_body = newExample.id;
            }
            const zapatillas_body = { 
                //return res.send(_body);
                price: req.body.precio,
                description: req.body.descripcion,
                color: req.body.color,
                discount: req.body.descuento,
                stock: req.body.stock,
                gender: req.body.gender,
                brand_id: marcas_body,
                example_id: modelos_body
            }
            
            //return res.send(zapatillas_body);
            let newZapatilla = await products.update(zapatillas_body, {where: {id: req.params.id}})
            
            
            await imageproducts.destroy({where: {product_id: req.params.id}})
            
            let lastImages = await products.findByPk(req.params.id, {include: ['images']})
            lastImages.images.forEach(async imagenes => await images.destroy({where: {id: imagenes.id}}))
            
            let newImage1 = await images.create ({filename: req.files[0] ? req.files[0].filename : req.body.oldImagen})
            await imageproducts.create({
                product_id: req.params.id,
                image_id: newImage1.id
            })
            let newImage2 = await images.create ({filename: req.files[1] ? req.files[1].filename : req.body.oldImagen2})
            await imageproducts.create({
                product_id: req.params.id,
                image_id: newImage2.id
            })
            let newImage3 = await images.create ({filename: req.files[2] ? req.files[2].filename : req.body.oldImagen3})
            await imageproducts.create({
                product_id: req.params.id,
                image_id: newImage3.id
            })
            let newImage4 = await images.create ({filename: req.files[3] ? req.files[3].filename : req.body.oldImagen4})
            await imageproducts.create({
                product_id: req.params.id,
                image_id: newImage4.id
            })
            let newImage5 = await images.create ({filename: req.files[4] ? req.files[4].filename : req.body.oldImagen5})
            await imageproducts.create({
                product_id: req.params.id,
                image_id: newImage5.id
            })

            let lastTalles = await products.findByPk(req.params.id, {include: ['sizes']});
            
            lastTalles.sizes.forEach(async talles => {await sizes.destroy({where: {id: talles.id}})})

            await productsize.destroy({where:{product_id: req.params.id},force:true})
            
            let newTalles = req.body.talles.map(talle => sizes.create({number: talle}).then(async size => {await productsize.create({size_id: size.id, product_id: req.params.id}, {where: {product_id: req.params.id}})}))

            res.redirect(`/adminProducts/detail/${req.params.id}`)
        },
        //Filtros por marca
        adidas: async (req, res) => {
            let marcas = await brands.findOne({where: {name: 'Adidas'}})
            const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
            res.render(path.resolve(__dirname , '..','views','admin','administrarProductos') , {zapatillas});
        },
        converse: async (req, res) => {
            let marcas = await brands.findOne({where: {name: 'Converse'}})
            const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
            res.render(path.resolve(__dirname , '..','views','admin','administrarProductos') , {zapatillas});
        },
        dcShoes: async (req, res) => {
            let marcas = await brands.findOne({where: {name: 'DC Shoes'}})
            const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
            res.render(path.resolve(__dirname , '..','views','admin','administrarProductos') , {zapatillas});
        },
        newBalance: async (req, res) => {
            let marcas = await brands.findOne({where: {name: 'New Balance'}})
            const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
            res.render(path.resolve(__dirname , '..','views','admin','administrarProductos') , {zapatillas});
        },
        nike: async (req, res) => {
            let marcas = await brands.findOne({where: {name: 'Nike'}})
            const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
            res.render(path.resolve(__dirname , '..','views','admin','administrarProductos') , {zapatillas});
        },
        reebok: async (req, res) => {
            let marcas = await brands.findOne({where: {name: 'Reebok'}})
            const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
            res.render(path.resolve(__dirname , '..','views','admin','administrarProductos') , {zapatillas});
        },
        vans: async (req, res) => {
            let marcas = await brands.findOne({where: {name: 'Vans'}})
            const zapatillas = await products.findAll({where: {brand_id: marcas.id}, include: ['brands', 'examples', 'images']});
            res.render(path.resolve(__dirname , '..','views','admin','administrarProductos') , {zapatillas});
        }
        
    }
    