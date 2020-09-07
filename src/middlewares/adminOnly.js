module.exports= (req,res,next) =>{
    if(res.locals.usuario.role > 1){
        return next();
    }else{
        res.redirect('/') 
    }
}