const path = require('path');
const fs = require('fs');

let zapatillas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/zapatillas.json')));

module.exports = {
    index: (req,res) =>{   
        let zapatillas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','zapatillas.json')));  
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'administrar'), {zapatillas});
    },
    create: (req, res) => {
        let zapatillas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','zapatillas.json')));
        res.render(path.resolve(__dirname, '..','views','admin','create'));
    },
    save: (req,res)=>{
        let zapatillas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','zapatillas.json')));      
        let ultimaZapatilla = zapatillas.pop();
        zapatillas.push(ultimaZapatilla);
        let nuevoProducto={
            id: ultimaZapatilla.id+1,
            marca: req.body.marca,
            modelo: req.body.modelo,
            genero: req.body.genero,
            color: req.body.color,
            talle : req.body.talle,
            precio:req.body.precio,
            descripcion:req.body.descripcion,
            imagen1: req.files[0].filename,
            imagen2: req.files[1].filename,
            imagen3: req.files[2].filename,
            imagen4: req.files[3].filename,
            imagen5: req.files[4].filename,
        };
        zapatillas.push(nuevoProducto);
        let nuevoProductoGuardar = JSON.stringify(zapatillas,null,2)
        fs.writeFileSync(path.resolve(__dirname,'..','data','zapatillas.json'), nuevoProductoGuardar);
        res.redirect('/admin');
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
        res.render(path.resolve(__dirname, '..','views','admin','detail.ejs'), {miZapatilla})
        
    },
    destroy:(req, res) => {
        let productoZapatillas = JSON.parse(fs.readFileSync(path.resolve(__dirname,"..", "data","zapatillas.json")));
        
        const zapatillaDeleteId = req.params.id;
        
        const zapatillasFinal = productoZapatillas.filter(productoZapatilla => productoZapatilla.id != zapatillaDeleteId);
        
        let zapatillasGuardar = JSON.stringify(zapatillasFinal,null,2);
        
        fs.writeFileSync(path.resolve(__dirname,'..','data','zapatillas.json'),zapatillasGuardar);
        
        res.redirect('/admin');
    },
    edit: (req,res) => {
        //Aca pasamos los datos del archivo Json de zapatillas a un Array
        let productoZapatillas = JSON.parse(fs.readFileSync(path.resolve(__dirname,"..", "data","zapatillas.json")));
        
        const zapatillaId = req.params.id;
        
        
        let zapatillaEditar= productoZapatillas.find(zapatilla => zapatilla.id == zapatillaId);
        //Aca pongo lo que le voy a mandar a la vista 
        res.render(path.resolve(__dirname, '..','views','admin','edit'), {zapatillaEditar});             
        
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
          res.redirect('/admin');
        },   
        
    }
