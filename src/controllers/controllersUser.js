const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const {
    check,
    validationResult,
    body
} = require('express-validator');
const { userInfo } = require('os');
const {users, adresses} = require ('../database/models');

module.exports = {
    index: async (req, res) => {
        const usuarios = await users.findAll()
        //return res.send(usuarios); 
        res.render(path.resolve(__dirname , '..','views','usuarios','login') , {usuarios}); 
    },
    login: async (req, res) => {
        const errors = validationResult(req);
        //return res.send(errors.mapped());
        if(!errors.isEmpty()) {
            const usuario = await users.findAll({where: {email: req.body.email}})
            delete usuario[0].password;
            //Acá voy a guardar en session al usuario
            req.session.usuario = usuario[0];  //Guardar del lado del servidor
            //Aquí voy a guardar las cookies del usuario que se loguea
            if(req.body.recordarme){
                res.cookie('email',usuario[0].email,{maxAge: 1000 * 60 * 60 * 24})
            }
            return res.redirect('/');   //Aquí ustedes mandan al usuario para donde quieran (Perfil- home)
        }else{
            //Devolver a la vista los errores
            res.render(path.resolve(__dirname, '../views/usuarios/login'),{errors:errors.mapped(),old:req.body});  
        }
    },
    create: async (req, res) => {
        const usuarios = await users.findAll()
        //return res.send(usuarios); 
        res.render(path.resolve(__dirname , '..','views','usuarios','registro') , {usuarios}); 
    },
    save: (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render(path.resolve(__dirname, '../views/usuarios/registro'), {
                errors: errors.errors,  old: req.body
            });
        }
        let usuario={
            first_name: req.body.nombre,
            last_name : req.body.apellido,
            //telephone : req.body.telefono,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.contraseña, 10),
            //genre: req.body.genero,    
            image: req.file.filename,
            role: 1   
        };
        
        users.create(usuario)
        .then((usuarioRegistrado) => {
            return res.redirect('/login');
        })
        .catch(error => console.log(error));    
    },




    logout: (req, res) => {
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect('/')
    },
    show: async (req, res) => {
        const usuarios = await users.findAll()
        //return res.send(usuarios); 
        res.render(path.resolve(__dirname , '..','views','usuarios','registro') , {usuarios}); 
        /*let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));
        const usuarioEmail = req.params.email;
        let usuarioMostrar = usuarios.find(usuario => usuario.email == usuarioEmail);
        res.render(path.resolve(__dirname, '../views/usuarios/perfilUsuario'), {usuarioMostrar});*/
    },
    update: async (req,res) =>{
        const usuarios = await users.findAll({where: {email: req.session.email}})  
        //tengo que buscar usuarios[0].id
        req.body.email = req.params.email;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        let userUpdate = usuarios.map(usuario => {
            if(usuario.email  == req.body.email){
                return usuario = req.body;
            }
            return usuario;
        });
        let usuarioActualizado = JSON.stringify(userUpdate,null,2)
        fs.writeFileSync(path.resolve(__dirname,'..','data','usuarios.json'), usuarioActualizado);
        res.redirect('/');
    }
    
}