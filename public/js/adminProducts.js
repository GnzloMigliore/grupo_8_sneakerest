window.addEventListener('load', () => {


    let botonDelete = document.querySelector('.btn-eliminar-producto');

    botonDelete.addEventListener('click', (event)=>{
        event.preventDefault()
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡Esta acción es irreversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar producto'
        }).then((result) => {
            if (result) {
                botonDelete.submit()
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    })

    
    
        
        
    })