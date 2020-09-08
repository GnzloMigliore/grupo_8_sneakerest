const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const {
    check,
    validationResult,
    body
} = require('express-validator');
//const { userInfo } = require('os');
const {users} = require ('../database/models');

module.exports = {
    index: async (req, res) => {
        const usuarios = await users.findAll()
        //return res.send(usuarios); 
        res.render(path.resolve(__dirname , '..','views','usuarios','login') , {usuarios}); 
    },
    login: async (req, res) => {
        
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            //return res.send(errors.mapped())
            return res.render(path.resolve(__dirname, '..', 'views', 'usuarios', 'login'), {
                errors: errors.mapped(),  old: req.body});
        } else {
            let usuarioLogueado = await users.findOne({where: {email: req.body.email}})
            delete usuarioLogueado.password;
            req.session.usuario = usuarioLogueado;
            //return res.send (req.session.usuario)
            if(req.body.recordarme){
                res.cookie('email', usuarioLogueado.email, {maxAge: 1000 * 60 * 60 * 48})
            }
            res.redirect('/');
        }
        
        
        
    },
    create: async (req, res) => {
        const usuarios = await users.findAll()
        //return res.send(usuarios); 
        res.render(path.resolve(__dirname , '..','views','usuarios','registro') , {usuarios}); 
    },
    save: (req, res) => {
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            //return res.send(errors.mapped())
            return res.render(path.resolve(__dirname, '..', 'views', 'usuarios', 'registro'), {
                errors: errors.mapped(),  old: req.body});
        }
        let usuario={
            first_name: req.body.nombre,
            last_name : req.body.apellido,
            telephone : req.body.telefono,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.contraseña, 10),
            gender: req.body.genero,    
            image: req.file.filename,
            role: 1   
        };
        
        users.create(usuario)
        .then((usuarioRegistrado) => {
            return res.redirect('/login');
        })
        .catch(error => res.send(error));    
    },
    logout: (req, res) => {
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect('/')
    },
    show: async (req, res) => {
        const usuarios = await users.findAll()
        //return res.send(usuarios); 
        res.render(path.resolve(__dirname , '..','views','usuarios','perfilUsuario') , {usuarios}); 
        /*let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));
        const usuarioEmail = req.params.email;
        let usuarioMostrar = usuarios.find(usuario => usuario.email == usuarioEmail);
        res.render(path.resolve(__dirname, '../views/usuarios/perfilUsuario'), {usuarioMostrar});*/
    },
    profile: async (req, res) => {
        const usuarios = await users.findByPk(req.params.id)
        //return res.send(usuarios); 
        res.render(path.resolve(__dirname , '..','views','usuarios','editarUsuario') , {usuarios});
    },
    update: async (req,res) =>{
        const usuarios = await users.findByPk(req.params.id)
        const usuario_body = { 
            //return res.send(_body);
            first_name: req.body.nombre,
            last_name: req.body.apellido,
            telephone: req.body.telefono,
            email: req.body.email,
            gender: req.body.gender,
            //password: req.body.password,
            image: req.file ? req.file.filename : req.body.oldImagen   
        }
        let updateUsuario = await users.update(usuario_body, {where: {id: req.params.id}})
        
        res.redirect('/perfil');
    },
    destroy: async (req, res) => {
        await users.destroy({where: {id:req.params.id}, force: true})
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});        
        res.redirect('/')
    }
    
}