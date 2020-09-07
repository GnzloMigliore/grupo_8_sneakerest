window.addEventListener('load',function(){
    
    let formulario = document.getElementById('formulario-registro');
    
    formulario.addEventListener('submit', function(evento) {

        if(!validaciones(evento)){
            evento.preventDefault();
        }else{
            formulario.submit();
        }    
        
        function validaciones(evento){
            //Destructuring  
            let {nombre, apellido, email, telefono, contraseña, confirmar_contraseña, genero, imagen, terminos} = formulario.elements;
            let errores = [];
            console.log(formulario.elements.confirmar_contraseña.value);
            //Validar Nombre
            if(nombre.value == '' && nombre.value.length < 2){
                errores.push('El nombre debe tener al menos dos caracteres');
                nombre.classList.add('is-invalid'); 
                nombre.classList.remove('is-valid'); 
                nombre.classList.add('borde-rojo')  
                //errores['nombre'] = 'El campo nombre no puede estar vacio...';
            }else{
                nombre.classList.add('is-valid');
                nombre.classList.remove('is-invalid');
                nombre.classList.add('borde-verde')  
            }
            
            
            //Validar Apellido
            if(apellido.value == '' && apellido.value.length < 2){
                errores.push('El apellido debe tener al menos dos caracteres');
                apellido.classList.add('is-invalid');   
                apellido.classList.remove('is-valid'); 
                apellido.classList.add('borde-rojo')  
                //errores['apellido'] = 'El campo apellido no puede estar vacio...';
            }else{
                apellido.classList.add('is-valid');
                apellido.classList.remove('is-invalid');
                apellido.classList.add('borde-verde')  
            }


            //Validar el email - Expresiones Regulares https://www.w3schools.com/jsref/jsref_obj_regexp.asp       https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
            let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
            if(!reEmail.test(email.value)){
                errores.push('Debe ingresar un email válido');
                email.classList.add('is-invalid');  
                email.classList.remove('is-valid'); 
                email.classList.add('borde-rojo') 
                //errores['last_name'] = 'El campo email no puede estar vacio...';
            }else{
                email.classList.add('is-valid');
                email.classList.remove('is-invalid');
                email.classList.add('borde-verde')  
            }

            //Valido que el telefono sean solo caracteres numéricos
            let reTelefono = /^[0-9]+$/
            if(!reTelefono.test(telefono.value)){
                errores.push('El telefono deben ser caracteres numéricos');
                telefono.classList.add('is-invalid');
                telefono.classList.remove('is-valid');
                telefono.classList.add('borde-rojo')   
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            }else{
                telefono.classList.add('is-valid');
                telefono.classList.remove('is-invalid');
                telefono.classList.add('borde-verde')
            }

            //Aquí valido el password haciendo uso de Expresiones Regulares
            //Esta expresión regular valida como Mínimo seis caracteres, al menos una letra y un número:
            let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            if(!rePassword.test(contraseña.value)){
                errores.push('La contraseña como mínimo debe tener ocho caracteres y al menos una letra y un número');
                contraseña.classList.add('is-invalid');   
                contraseña.classList.remove('is-valid');
                contraseña.classList.add('borde-rojo');
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            }else{
                contraseña.classList.add('is-valid');
                contraseña.classList.remove('is-invalid');
                contraseña.classList.add('borde-verde')
            }

            //Aquí valido a que la confirmación del password no llegue vacia
            if(confirmar_contraseña.value == ""){
                errores.push('La confirmación de la contraseña no puede estar vacia');
                confirmar_contraseña.classList.add('is-invalid'); 
                confirmar_contraseña.classList.remove('is-valid');
                confirmar_contraseña.classList.add('borde-rojo');  
                
            }else{
                //Ahora valido si las dos contraseñas son iguales
                if(contraseña.value != confirmar_contraseña.value && confirmar_contraseña != ""){
                    errores.push('Las contraseñas deben ser iguales');
                    confirmar_contraseña.classList.add('is-invalid');
                    confirmar_contraseña.classList.remove('is-valid');
                    confirmar_contraseña.classList.add('borde-rojo');     
                    //errores['last_name'] = 'El campo nombre no puede estar vacio...';
                }else{
                    confirmar_contraseña.classList.add('is-valid');
                    confirmar_contraseña.classList.remove('is-invalid');
                    confirmar_contraseña.classList.add('borde-verde')
                }
            }
            

            //Aquí valido el telefono el cual no puede estar vacia
            if(genero.value == ""){
                errores.push('Debe seleccionar su genero')
                genero.classList.add('is-invalid');
                genero.classList.remove('is-valid');
                genero.classList.add('borde-rojo');   
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            }else{
                genero.classList.add('is-valid');
                genero.classList.remove('is-invalid');
                genero.classList.add('borde-verde'); 
            }

            let ext = imagen.value.split('.');
            //console.log(ext);
            if(ext[1] != 'jpg' && ext[1] != 'jpeg' && ext[1] != 'png' && ext[1] != 'gif' && ext[1] != 'webp'){
                errores.push('La imagen debe ser un archivo JPG, JPEG, PNG, GIF o WebP');
                imagen.classList.add('is-invalid');
                imagen.classList.remove('is-valid');
                imagen.classList.add('borde-rojo');
            }else{
                imagen.classList.remove('is-invalid');
                imagen.classList.add('is-valid');
                imagen.classList.add('borde-verde');
            }

            //Aquí valido que el usuario coloque su avatar (Yo en mi caso lo considero como un dato obligatorio, ustedes si quieren lo validan como deseen)
            if(imagen.value == ''){
                errores.push('Debe seleccionar su imagen en formato JPG, JPEG, PNG, GIF o WebP');
                imagen.classList.add('is-invalid');   
                imagen.classList.remove('is-valid');
                imagen.classList.add('borde-rojo');
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            }else{
                imagen.classList.add('is-valid');
                imagen.classList.remove('is-invalid');
                imagen.classList.add('borde-verde');
            }

            if(terminos.checked == false){
                errores.push('Debe aceptar los terminos y condiciones');
                terminos.classList.add('is-invalid'); 
                terminos.classList.remove('is-valid');
                terminos.classList.add('letra-rojo');  
            }else{
                terminos.classList.add('is-valid');
                terminos.classList.remove('is-invalid');
                terminos.classList.add('borde-verde');  
            }
            
            //Aquí enviamos los errores al usuario
            let ulErrores = document.getElementById('errores-registro');
            ulErrores.classList.add('alert-danger')
            if(errores.length > 0){

                evento.preventDefault();
                ulErrores.innerHTML = "";
                for (let i = 0 ; i < errores.length; i++){
                    ulErrores.innerHTML += `<li> ${errores[i]} </li> `
                }
                errores = [];
            }else{
                return true;
            } 
        }
        
    })
    
    
    
})