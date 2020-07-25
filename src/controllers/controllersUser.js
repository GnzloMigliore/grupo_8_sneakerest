const path = require('path');
const fs = require('fs');

module.exports = {
    index: function (req,res){
        let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));
        res.render(path.resolve(__dirname, '..', 'views', 'usuarios', 'login'),{usuarios});
    },
    create: (req, res) => {
        let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));
        res.render(path.resolve(__dirname, '..','views','usuarios','registro'));
    },
    save: (req,res)=>{
        let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));      
        let ultimoUsuario = usuarios.pop();
        usuarios.push(ultimoUsuario);
        let nuevoUsuario={
            id: ultimoUsuario.id+1,
            nombre: req.body.nombre,
            apellido : req.body.apellido,
            email: req.body.email,
            contraseña: req.body.contraseña,
            genero: req.body.genero,    
            imagen: req.file.filename   
        };
        usuarios.push(nuevoUsuario);
        let nuevoUsuarioGuardar = JSON.stringify(usuarios,null,2)
        fs.writeFileSync(path.resolve(__dirname,'..','data','usuarios.json'), nuevoUsuarioGuardar);
        res.redirect('/');
    },
    recover:   function(req,res){
    res.render(path.resolve(__dirname,'..','views','usuarios','recover'))
}
}