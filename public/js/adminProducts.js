window.addEventListener('load', () => {

    let botonDelete = document.querySelectorAll('.btn-eliminar-producto');

    botonDelete.forEach(boton => {
        boton.addEventListener('click', () => {
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
                if (result.value) {
                    boton.submit()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
                    }
                })
        })
    })
    
    
        
        
    })