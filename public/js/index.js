window.addEventListener('load', function() {
    
    let modal = document.getElementById('modalSuscribirse');
    let close = document.querySelector('.close')
    
    
    if (sessionStorage.getItem('modalSuscribirse') !== 'true') { //Acá se obtiene un item desde el cual se lee la data almacenada en la session
        setTimeout(function(){                                   //Si todavía no hay data guardada en la session (si es false) ejecuta el setTimeOut
            $('#modalSuscribirse').modal('show')
        },3000);
        sessionStorage.setItem('modalSuscribirse','true');       //Una vez ejecutado el setTimeOut guarda esa info en la session local entonces la prox que cargué la 
    }                                                          // página y busqué en la session local esta va a dar true y no va a ejecutar el setTimeOut
    
    close.addEventListener('click', () => {
        modal.style.display = 'none';
      })
    
      window.addEventListener('click', () => {
        if(event.target == modal){
          modal.style.display = 'none';
        }
    })



    
    //document ready
    $(document).ready(function(){
        //Event for pushed the video
        $('#carouselExampleControls').carousel({
            pause: true,
            interval: false
        });
    });
    
    
    let flechaScroll = document.querySelectorAll('.flecha-scroll'); 
    flechaScroll.forEach(link => { 
        link.onclick = function (e) { 
            e.preventDefault(); 
            let destination =  
            document.querySelector(this.hash); 
            destination.scrollIntoView({ 
                behavior: 'smooth' 
            }); 
        } 
    });
    let flechaScroll2 = document.querySelectorAll('.flecha-scroll2'); 
    flechaScroll2.forEach(link => { 
        link.onclick = function (e) { 
            e.preventDefault(); 
            let destination =  
            document.querySelector(this.hash); 
            destination.scrollIntoView({ 
                behavior: 'smooth' 
            }); 
        } 
    });  
});