const path = require('path');
const fs = require('fs');

const {products, brands, examples} = require ('../database/models');

module.exports = {
    index: (req,res) =>{   
        const zapatillas = products.findAll();
        const marcas = brands.findAll();
        const modelos = examples.findAll();
        Promise.all([zapatillas, marcas, modelos])
        .then(([zapatillas, marcas, modelos]) =>{
            //return res.send({zapatillas, marcas, modelos})
            res.render(path.resolve(__dirname , '..','views','admin','administrarProductos') , {zapatillas, marcas, modelos});
        })           
        .catch(error => res.send(error))
    },
    
    create: (req, res) => {
        res.render(path.resolve(__dirname, '..','views','admin','createProductos'));
    },
    save: (req,res)=>{
        const zapatillas = products.findAll();
        const marcas = brands.findAll();
        const modelos = examples.findAll();
        const zapatillas_body = { 
            //return res.send(_body);
            price: req.body.precio,
            description: req.body.descripcion,
            image: req.file ? req.file.filename : 'error',
            stock: req.body.descuento,
        }
        const marcas_body = req.body.marca;
        const modelos_body = req.body.modelo;
        Promise.all([zapatillas, marcas, modelos])    
        return res.send({zapatillas_body, marcas_body, modelos_body});
        /*products.create(zapatillas_body)
        brands.create(marcas_body)
        examples.create(modelos_body)
        .then(zapatilla =>{
            res.redirect('/adminProducts');
        })
        .catch(error => res.send(error))*/
        
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
    