const path = require('path');
const fs = require('fs');
//const db = require ('../database/models');
//const products = db.products;
const {products, brands, examples} = require ('../database/models');

module.exports = {
    productos: (req,res) => {
        /*products.findAll()
        .then(zapatillas=> {
            //return res.send(zapatillas)
            res.render(path.resolve(__dirname, '..', 'views', 'productos', 'productos'), {zapatillas});
        })
        .catch(error => res.send(error))*/
        const zapatillas = products.findAll();
        const marcas = brands.findAll();
        const modelos = examples.findAll();
        Promise.all([zapatillas, marcas, modelos])
        .then(([zapatillas, marcas, modelos]) =>{
            //return res.send({zapatillas, marcas, modelos})
            res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas, marcas, modelos});
        })           
        .catch(error => res.send(error))
        
    },








    
    detail: (req,res) => {
        let zapatillas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','zapatillas.json')));
    
        let miZapatilla;
        zapatillas.forEach(zapatilla => {
            if(zapatilla.id == req.params.id){
                miZapatilla = zapatilla;         
            }
        });
        res.render(path.resolve(__dirname, '..','views','productos','detalleProducto'), {miZapatilla})

}    
}