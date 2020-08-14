const path = require('path');
const fs = require('fs');



module.exports = {
    index: (req,res) =>{   
        let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));  
        res.render(path.resolve(__dirname, '../views/admin/administrarUsuarios'), {usuarios});
    },
    show: (req,res) =>{   
        let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));  
        let unUsuario;
        usuarios.forEach(usuario => {
            if(usuario.email == req.params.email){
                unUsuario = usuario;         
            }
        });
        res.render(path.resolve(__dirname, '..','views','admin','detailUsuario'), {unUsuario})
    },
    destroy:(req,res) =>{   
        let usuarioSeleccionado =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));  
        
        const usuarioDeleteEmail = req.params.email;
        const usuarioFinal = usuarioSeleccionado.filter(usuario => usuario.email != usuarioDeleteEmail);
        
        let usuarioGuardar = JSON.stringify(usuarioFinal, null, 2);
        
        fs.writeFileSync(path.resolve(__dirname, '../data/usuarios.json'), usuarioGuardar);
        
        res.redirect('/adminUsers');
    },
    edit:(req,res) =>{   
        //Aca pasamos los datos del archivo Json de zapatillas a un Array
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname,"..", "data","usuarios.json")));
        
        const usuarioEmail = req.params.email;
        
        
        let usuarioEditar= usuarios.find(usuario => usuario.email == usuarioEmail);
        //Aca pongo lo que le voy a mandar a la vista 
        res.render(path.resolve(__dirname, '..','views','admin','editUsuario'), {usuarioEditar});
    },
    updateRole: (req,res) =>{ 
        req.body.email = req.params.email;
        /*req.body.nombre = req.params.nombre;
        req.body.apellido = req.params.apellido;
        req.body.genero = req.params.genero;
        req.body.imagen = req.params.imagen;*/

        let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));  
        let usuarioUpdate = usuarios.map(usuario=>{
            if(usuario.email == req.body.email){
                return usuario = req.body;
            }
            return usuario;
        });
        fs.writeFileSync(path.resolve(__dirname,'../data/usuarios.json'),JSON.stringify(usuarioUpdate, null, 2));
        res.redirect('/adminUsers');
    }
    
};