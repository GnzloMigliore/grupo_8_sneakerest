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
            imagen : req.filename
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
                miZapatilla==zapatilla;         
            }
        });
        res.render(path.resolve(__dirname, '..','views','admin','detail'), {miZapatilla})
        
    },
}