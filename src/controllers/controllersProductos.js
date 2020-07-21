const path = require('path');
const fs = require('fs');

module.exports = {
    productos: function(req,res){
        let zapatillas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','zapatillas.json')));
        res.render(path.resolve(__dirname, '..', 'views', 'productos', 'productos'), {zapatillas});
        
    },
    detail: function(req,res){
        let zapatillas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','zapatillas.json')));
    
        let miZapatilla;
        zapatillas.forEach(zapatilla => {
            if(zapatilla.id == req.params.id){
                miZapatilla = zapatilla;         
            }
        });
        res.render(path.resolve(__dirname, '..','views','productos','detalleProducto2'), {miZapatilla})

}    
}