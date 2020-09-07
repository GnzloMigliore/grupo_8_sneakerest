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
        let destroyUsuario = await users.destroy({where: {id: req.params.id}, force: true})
        res.redirect('/adminUsers')
        
        /*users.destroy({
            where : {
               id:  req.params.id
            },
            force : true 
        })
        .then(confirm =>{
            res.redirect('/adminUsers');
        })*/
    },
    edit: async (req,res) =>{   
        const usuarios = await users.findByPk(req.params.id)
        //return res.send(usuarios); 
        res.render(path.resolve(__dirname , '..','views','admin','editUsuario') , {usuarios});    
    },
    updateRole: async (req,res) =>{ 
        /*users.update({
            role:req.body.role
        },
        {
            where : {
                id : req.params.id
            }
        })
        .then(confirm =>{
            res.redirect('/adminUsers')
        })
        .catch(error => res.send(error));*/
        const usuarios = await users.findByPk(req.params.id)
        let role_body = {
            role: req.body.role
        }
        //return res.send(role_body);
        let newRole = await users.update(role_body, {where: {id: req.params.id}})
        res.redirect('/adminUsers')
        
        
    }
    
};