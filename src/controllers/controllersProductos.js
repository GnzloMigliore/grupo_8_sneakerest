const path = require('path');
const fs = require('fs');
const db = require ('../database/models');
const Product = db.Product;
//const {Product, Model} = require ('../database/models');

module.exports = {
    productos: (req,res) => {
        Product.findAll()
        .then(zapatillas=> {
            //return res.send(zapatillas)
            res.render(path.resolve(__dirname, '..', 'views', 'productos', 'productos'), {zapatillas});
        })
        .catch(error => res.send(error))
        /*const zapatillas = Product.findAll();
        const modelos = Model.findAll();
        Promise.all([zapatillas,modelos])
        .then(([zapatillas,modelos]) =>{
            //return res.send(zapatillas)
            res.render(path.resolve(__dirname , '..','views','productos','productos') , {zapatillas,modelos});
        })           
        .catch(error => res.send(error))*/
        
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