window.addEventListener('load',function(){
    
    let formulario = document.getElementById('formulario-create');
    
    formulario.addEventListener('submit', function(evento) {
        
        if(!validaciones(evento)){
            evento.preventDefault();
        }else{
            formulario.submit();
        }    
        
        function validaciones(evento){
            
            //Destructuring  
            let {marca, modelo, descripcion, genero, color, talles, precio, descuento, stock} = formulario.elements;
            let imagenes = formulario.elements["imagen[]"]
            let errores = [];
            //console.log(formulario.elements.marca.value);
            //Validar Nombre
            if(marca.value == ''){
                errores.push('La marca debe tener al menos dos caracteres');
                marca.classList.add('is-invalid'); 
                marca.classList.remove('is-valid'); 
                marca.classList.add('borde-rojo')  
                //errores['marca'] = 'El campo marca no puede estar vacio...';
            }else{
                marca.classList.add('is-valid');
                marca.classList.remove('is-invalid');
                marca.classList.add('borde-verde')  
            }
            
            
            //Validar Apellido
            if(modelo.value == '' && modelo.value.length < 2){
                errores.push('El modelo debe tener al menos dos caracteres');
                modelo.classList.add('is-invalid');   
                modelo.classList.remove('is-valid'); 
                modelo.classList.add('borde-rojo')  
                //errores['modelo'] = 'El campo modelo no puede estar vacio...';
            }else{
                modelo.classList.add('is-valid');
                modelo.classList.remove('is-invalid');
                modelo.classList.add('borde-verde')  
            }
            
            //Validar descripcion
            if(descripcion.value == '' && descripcion.value.length < 20){
                errores.push('El descripcion debe tener al menos dos caracteres');
                descripcion.classList.add('is-invalid');   
                descripcion.classList.remove('is-valid'); 
                descripcion.classList.add('borde-rojo')  
                //errores['descripcion'] = 'El campo descripcion no puede estar vacio...';
            }else{
                descripcion.classList.add('is-valid');
                descripcion.classList.remove('is-invalid');
                descripcion.classList.add('borde-verde')  
            }
            
            //Aquí valido el genero el cual no puede estar vacia
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
            
            //Aquí valido el color el cual no puede estar vacia
            if(color.value == "#"){
                errores.push('Debe seleccionar su color')
                color.classList.add('is-invalid');
                color.classList.remove('is-valid');
                color.classList.add('borde-rojo');   
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            }else{
                color.classList.add('is-valid');
                color.classList.remove('is-invalid');
                color.classList.add('borde-verde'); 
            }
            
            
            //Aquí valido los talles el cual no puede estar vacia
            if(talles.value == ""){
                errores.push('Debe seleccionar su talles')
                talles.classList.add('is-invalid');
                talles.classList.remove('is-valid');
                talles.classList.add('borde-rojo');   
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            }else{
                talles.classList.add('is-valid');
                talles.classList.remove('is-invalid');
                talles.classList.add('borde-verde'); 
            }
            
            //Valido que el precio sean solo caracteres numéricos
            let rePrecio = /^[0-9]+$/
            if(!rePrecio.test(precio.value) && precio.value == ''){
                errores.push('El precio deben ser caracteres numéricos');
                precio.classList.add('is-invalid');
                precio.classList.remove('is-valid');
                precio.classList.add('borde-rojo')   
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            }else{
                precio.classList.add('is-valid');
                precio.classList.remove('is-invalid');
                precio.classList.add('borde-verde')
            }
            
            //Aquí valido los talles el cual no puede estar vacia
            if(descuento.value == ""){
                errores.push('Debe seleccionar su descuento')
                descuento.classList.add('is-invalid');
                descuento.classList.remove('is-valid');
                descuento.classList.add('borde-rojo');   
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            }else{
                descuento.classList.add('is-valid');
                descuento.classList.remove('is-invalid');
                descuento.classList.add('borde-verde'); 
            }
            
            //Valido que el telefono sean solo caracteres numéricos
            let reStock = /^[0-9]+$/
            if(!reStock.test(stock.value) && stock.value == ''){
                errores.push('El stock deben ser caracteres numéricos');
                stock.classList.add('is-invalid');
                stock.classList.remove('is-valid');
                stock.classList.add('borde-rojo')   
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            }else{
                stock.classList.add('is-valid');
                stock.classList.remove('is-invalid');
                stock.classList.add('borde-verde')
            }
            
            
            debugger
            
            
            
            //Aquí valido que el usuario coloque su avatar (Yo en mi caso lo considero como un dato obligatorio, ustedes si quieren lo validan como deseen)
            imagenes.forEach(imagen => {
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
            })
            
            
            
            //Aquí enviamos los errores al usuario
            let ulErrores = document.getElementById('errores-create');
            console.log(ulErrores);
            ulErrores.classList.add('alert-danger')
            
            if(errores.length > 0){
                evento.preventDefault();
                ulErrores.innerHTML = "";
                for (let i = 0 ; i < errores.length; i++){
                    ulErrores.innerHTML += `<li> ${errores[i]} </li> `
                }
                errores = [];
                return false
            }else{
                return true;
            } 
        }
        
    })  
})