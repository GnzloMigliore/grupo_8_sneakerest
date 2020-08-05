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

module.exports = {
    index: (req, res) => {
        let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));
        res.render(path.resolve(__dirname, '..', 'views', 'usuarios', 'login'),{usuarios});
    },
    login: (req, res) => {
        const errors = validationResult(req);
        //return res.send(errors.mapped());
        if(errors.isEmpty()) {
            let archivoUsuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));
            let usuarioLogueado = archivoUsuarios.find(usuario => usuario.email == req.body.email);
            //Se puede borrar de lo que le llega al formulario lo que se desee
            //Por seguridad todo dato crítico se puede borrar
            delete usuarioLogueado.password;
            //Acá voy a guardar en session al usuario
            req.session.usuario = usuarioLogueado;  //Guardar del lado del servidor
            //Aquí voy a guardar las cookies del usuario que se loguea
            if(req.body.recordarme){
                res.cookie('email',usuarioLogueado.email,{maxAge: 1000 * 60 * 60 * 24})
            }
            return res.redirect('/');   //Aquí ustedes mandan al usuario para donde quieran (Perfil- home)
        }else{
            //Devolver a la vista los errores
            res.render(path.resolve(__dirname, '../views/usuarios/login'),{errors:errors.mapped(),old:req.body});  
        }
    },
    create: (req, res) => {
        let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));
        res.render(path.resolve(__dirname, '..','views','usuarios','registro'));
    },
    save: (req, res) => {
        
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let nuevoUsuario={
                nombre: req.body.nombre,
                apellido : req.body.apellido,
                email: req.body.email,
                contraseña: bcrypt.hashSync(req.body.contraseña, 10),
                genero: req.body.genero,    
                imagen: req.file.filename,
                role: 1   
            };
            let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));
            usuarios.push(nuevoUsuario);
            
            let nuevoUsuarioGuardar = JSON.stringify(usuarios,null,2)
            fs.writeFileSync(path.resolve(__dirname,'..','data','usuarios.json'), nuevoUsuarioGuardar);
            res.redirect('/login');
        } else {
            return res.render(path.resolve(__dirname, '../views/usuarios/registro'), {
                errors: errors.errors,  old: req.body
            });
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect('/')
    },
    show: (req, res) => {
        let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));
        const usuarioEmail = req.params.email;
        let usuarioMostrar = usuarios.find(usuario => usuario.email == usuarioEmail);
        res.render(path.resolve(__dirname, '../views/usuarios/perfilUsuario'), {usuarioMostrar});
    },
    /*update: (req,res) =>{
        let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));
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
    */
}