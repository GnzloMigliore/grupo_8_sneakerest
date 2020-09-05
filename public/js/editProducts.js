window.addEventListener('load', ()=>{

    let formulario = document.getElementById('formulario-edit');
    
    formulario.addEventListener('submit', function(evento) {

        if(!validaciones(evento)){
            evento.preventDefault();
        }else{
            formulario.submit();
        }    
        
        function validaciones(evento){
            //Destructuring  
            let {marca, modelo, descripcion, color, talles, precio, descuento, stock} = formulario.elements;
            
            let errores = [];


            //Validar Modelo
            if(marca.value == ''){
                errores.push('Debe seleccionar una marca');
                marca.classList.add('is-invalid'); 
                marca.classList.remove('is-valid'); 
                marca.classList.add('borde-rojo'); 
            }else{
                marca.classList.add('is-valid');
                marca.classList.remove('is-invalid');
                marca.classList.add('borde-verde');
            }
            

            //Validar modelo
            if(modelo.value == ''){
                errores.push('El modelo debe tener al menos dos caracteres');
                modelo.classList.add('is-invalid');   
                modelo.classList.remove('is-valid'); 
                modelo.classList.add('borde-rojo')  
            }else{
                modelo.classList.add('is-valid');
                modelo.classList.remove('is-invalid');
                modelo.classList.add('borde-verde')  
            }

            //Validar modelo
            if(modelo.value.length < 2){
                errores.push('El modelo debe tener al menos dos caracteres');
                modelo.classList.add('is-invalid');   
                modelo.classList.remove('is-valid'); 
                modelo.classList.remove('borde-verde');
                modelo.classList.add('borde-rojo')  
            }else{
                modelo.classList.add('is-valid');
                modelo.classList.remove('is-invalid');
                modelo.classList.add('borde-verde')  
            }



            //Validar descripcion
            if(descripcion.value == ''){
                errores.push('El descripcion debe tener al menos dos caracteres');
                descripcion.classList.add('is-invalid');   
                descripcion.classList.remove('is-valid'); 
                descripcion.classList.add('borde-rojo')  
            }else{
                descripcion.classList.add('is-valid');
                descripcion.classList.remove('is-invalid');
                descripcion.classList.add('borde-verde')  
            }

            //Validar descripcion
            if(descripcion.value.length < 20){
                errores.push('El descripcion debe tener al menos dos caracteres');
                descripcion.classList.add('is-invalid');   
                descripcion.classList.remove('is-valid'); 
                descripcion.classList.remove('borde-verde');
                descripcion.classList.add('borde-rojo')  
            }else{
                descripcion.classList.add('is-valid');
                descripcion.classList.remove('is-invalid');
                descripcion.classList.add('borde-verde')  
            }


           

            //Valido que el precio sean solo caracteres numéricos
            if(precio.value == ''){
                errores.push('El precio debe ser mayor a $100');
                precio.classList.add('is-invalid');
                precio.classList.remove('is-valid');
                precio.classList.remove('borde-verde');
                precio.classList.add('borde-rojo')   
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
            }else{
                descuento.classList.add('is-valid');
                descuento.classList.remove('is-invalid');
                descuento.classList.add('borde-verde'); 
            }

             //Aquí valido el color el cual no puede estar vacia
             if(color.value == "#"){
                errores.push('Debe seleccionar su color')
                color.classList.add('is-invalid');
                color.classList.remove('is-valid');
                color.classList.add('borde-rojo');   
            }else{
                color.classList.add('is-valid');
                color.classList.remove('is-invalid');
                color.classList.add('borde-verde'); 
            }

            
            //Aquí valido los talles el cual no puede estar vacia
            if(talles.value == ""){
                errores.push('Debe seleccionar sus talles')
                talles.classList.add('is-invalid');
                talles.classList.remove('is-valid');
                talles.classList.remove('borde-verde');
                talles.classList.add('borde-rojo');   
            }else{
                talles.classList.add('is-valid');
                talles.classList.remove('is-invalid');
                talles.classList.add('borde-verde'); 
            }

            //Valido que el stock sean solo caracteres numéricos
            let reStock = /^[0-9]+$/
            if(!reStock.test(stock.value) && stock.value == ''){
                errores.push('El stock deben ser caracteres numéricos');
                stock.classList.add('is-invalid');
                stock.classList.remove('is-valid');
                stock.classList.add('borde-rojo')   
            }else{
                stock.classList.add('is-valid');
                stock.classList.remove('is-invalid');
                stock.classList.add('borde-verde')
            }


            

            //Aquí enviamos los errores al usuario
            let ulErrores = document.getElementById('errores-edit');
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

        /******************************************************/

        }

    })



})