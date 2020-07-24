const path = require('path');
const fs = require('fs');



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
            genero: req.genero,
            color: req.body.color,
            talle : req.body.talle,
            precio:req.body.precio,
            descripcion:req.body.descripcion,
            imagen : req.file.filename,
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
                miZapatilla=zapatilla;         
            }
        });
        res.render(path.resolve(__dirname, '..','views','admin','detail.ejs'), {miZapatilla})
        
    },
    destroy:(req, res) => {
        //Aca pasamos los datos del archivo Json de Habanos a un Array
        let productoZapatillas = JSON.parse(fs.readFileSync(path.resolve(__dirname,"..", "data","zapatillas.json")));
        
        const zapatillaDeleteId = req.params.id;
        
        const zapatillasFinal = productoZapatillas.filter(productoZapatilla => productoZapatilla.id != zapatillaDeleteId);
        
        let zapatillasGuardar = JSON.stringify(zapatillasFinal,null,2);
        
        fs.writeFileSync(path.resolve(__dirname,'..','data','zapatillas.json'),zapatillasGuardar);
        
        res.redirect('/admin');
    },
    edit: (req,res) => {
        //Aca pasamos los datos del archivo Json de Habanos a un Array
        let productoZapatillas = JSON.parse(fs.readFileSync(path.resolve(__dirname,"..", "data","zapatillas.json")));
        
        const zapatillaId = req.params.id;
        
        
        let zapatillaEditar= productoZapatillas.find(productoZapatilla => productoZapatilla.id == zapatillaId);
        //Aca pongo lo que le voy a mandar a la vista 
        res.render(path.resolve(__dirname, '..','views','admin','edit'), {zapatillaEditar});             
        
    },
    
    updateZapatillas (req,res){
        let productoZapatillas = JSON.parse(fs.readFileSync(path.resolve(__dirname,"..", "data","zapatillas.json")));
        
        req.body.id = req.params.id;
        
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        //Aca voy a contener el nuevo habano que ya se actualizo
        let zapatillaUpdate = productoZapatillas.map(productoZapatilla => {
            if(productoZapatilla.id == req.body.id){
                return productoZapatilla = req.body;
            }
            return productoZapatilla;
        });
        let zapatillasActualizar = JSON.stringify(zapatillaUpdate,null,2)
        //Aqui sobre escribo nuestro archivo Json para guardar los nuevos productos
        fs.writeFileSync(path.resolve(__dirname,'..','data','zapatillas.json'),zapatillasActualizar);
        //Aqui redireccionamos los nuevos productos a la vista administrar
        res.redirect('/admin');      
        
    },
          

            update (req,res){
                let productoZapatillas = JSON.parse(fs.readFileSync(path.resolve(__dirname,"..", "data","zapatillas.json")));
            
                req.body.id = req.params.id;
              
                req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
                //Aca voy a contener el nuevo habano que ya se actualizo
                let zapatillaUpdate = productoZapatillas.map(productoZapatilla => {
                    if(productoZapatilla.id == req.body.id){
                        return productoZapatilla = req.body;
                    }
                    return productoZapatilla;
                });
                let zapatillasActualizar = JSON.stringify(zapatillaUpdate,null,2)
                //Aqui sobre escribo nuestro archivo Json para guardar los nuevos productos
                fs.writeFileSync(path.resolve(__dirname,'..','data','zapatillas.json'),zapatillasActualizar);
                //Aqui redireccionamos los nuevos productos a la vista administrar
                res.redirect('/admin');      

            },
}