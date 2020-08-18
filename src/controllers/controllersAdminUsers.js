const path = require('path');
const fs = require('fs');
const {users, adresses} = require ('../database/models');



module.exports = {
    index: async (req,res) =>{   
        const usuarios = await users.findAll()
        //return res.send(usuarios); 
        res.render(path.resolve(__dirname , '..','views','admin','administrarUsuarios') , {usuarios}); 
    },
    show: async (req,res) =>{   
        const usuarios = await users.findByPk(req.params.id)
        //return res.send(usuarios); 
        res.render(path.resolve(__dirname , '..','views','admin','detailUsuario') , {usuarios}); 
    },
    destroy: async (req,res) =>{ 
        let destroyUsuario = await usuarios.destroy({where: {id: req.params.id}, force: true})
        res.redirect('/adminUsers')
    },
    edit: async (req,res) =>{   
        const usuarios = await users.findAll()
        //return res.send(usuarios); 
        res.render(path.resolve(__dirname , '..','views','admin','administrarUsuarios') , {usuarios});    
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