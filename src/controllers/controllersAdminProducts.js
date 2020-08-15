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
            description: req.body.descripcion,
            image: req.file ? req.file.filename : 'error',
            stock: req.body.descuento,
            brand_id: marcas_body,
            example_id: modelos_body
        }
        
        //return res.send(zapatillas_body);
        let newZapatilla = await products.create(zapatillas_body)
            res.redirect(`/detalleProducto/${newZapatilla.id}`);
        
    },
    show: (req,res)=>{
        let zapatillas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','zapatillas.json')));
        //res.send(req.params.id);
        let miZapatilla;
        zapatillas.forEach(zapatilla => {
            if(zapatilla.id == req.params.id){
                miZapatilla = zapatilla;         
            }
        });
        res.render(path.resolve(__dirname, '..','views','admin','detailProducto'), {miZapatilla})
        
    },
    destroy:(req, res) => {
        let productoZapatillas = JSON.parse(fs.readFileSync(path.resolve(__dirname,"..", "data","zapatillas.json")));
        
        const zapatillaDeleteId = req.params.id;
        
        const zapatillasFinal = productoZapatillas.filter(productoZapatilla => productoZapatilla.email != zapatillaDeleteId);
        
        let zapatillasGuardar = JSON.stringify(zapatillasFinal,null,2);
        
        fs.writeFileSync(path.resolve(__dirname,'..','data','zapatillas.json'),zapatillasGuardar);
        
        res.redirect('/adminProducts');
    },
    edit: (req,res) => {
        //Aca pasamos los datos del archivo Json de zapatillas a un Array
        let productoZapatillas = JSON.parse(fs.readFileSync(path.resolve(__dirname,"..", "data","zapatillas.json")));
        
        const zapatillaId = req.params.id;
        
        
        let zapatillaEditar= productoZapatillas.find(zapatilla => zapatilla.id == zapatillaId);
        //Aca pongo lo que le voy a mandar a la vista 
        res.render(path.resolve(__dirname, '..','views','admin','editProductos'), {zapatillaEditar});             
        
    },
    updateZapatillas: (req,res) => {
        req.body.id = req.params.id;
        req.body.imagen1 = req.files[0] ? req.files[0].filename : req.body.oldImagen1;
        req.body.imagen2 = req.files[1] ? req.files[1].filename : req.body.oldImagen2;
        req.body.imagen3 = req.files[2] ? req.files[2].filename : req.body.oldImagen3;
        req.body.imagen4 = req.files[3] ? req.files[3].filename : req.body.oldImagen4;
        req.body.imagen5 = req.files[4] ? req.files[4].filename : req.body.oldImagen4;
        let zapatillasUpdate = zapatillas.map(zapatilla=>{
            if(zapatilla.id == req.body.id){
                return zapatilla= req.body;
            }
            return zapatilla;
        });
        let oldImages = [, req.body.oldImagen1, req.body.oldImagen2, req.body.oldImagen3, req.body.oldImagen4]
        for(let i = 0; i < oldImages.length; i++){
            if(req.files[i]){
                fs.unlink(path.resolve(__dirname, '/images/zapatillas/'+ oldImages[i]),(err) => {
                    if (err){console.log(err)};
                    console.log('/images/zapatillas/'+ oldImages[i] + ' fue borrada');
                });
            }}
            fs.writeFileSync(path.resolve(__dirname,'../data/zapatillas.json'),JSON.stringify(zapatillasUpdate, null, 2));
            res.redirect('/adminProducts');
        },   
        
    }
    