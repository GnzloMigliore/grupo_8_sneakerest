window.addEventListener('load', function(){

    let botonesDeleteItemsCarrito = document.getElementsByClassName('x-eliminar-producto-carrito')
    console.log(botonesDeleteItemsCarrito);
    for (let i = 0; i < botonesDeleteItemsCarrito.length; i++ ) {
        let boton = botonesDeleteItemsCarrito[i];
        boton.addEventListener('click', function (event) {
            let botonClickeado = event.target;
            botonClickeado.parentElement.parentElement.parentElement.remove()
            //actualizarTotal()
        }) 
    }



})




/*function actualizarTotal() {
    let lineaProductoContainer = document.getElementsByClassName('productos-carrito')[0];
    let lineaProducto = lineaProductoContainer.getElementsByClassName('linea-producto');
    let total = 0;
    for (let i = 0; i < lineaProducto.length; i++) {
        const lineaProductos = lineaProducto[i];
        const precioProducto = lineaProductos.getElementsByClassName('precio-carrito')[0];
        const cantidadProducto = lineaProductos.getElementsByClassName('cantidad-carrito')[0];
        const precio = parseFloat(precioProducto.innerText.replace('$', ''));
        const cantidad = cantidadProducto.value;
        console.log(precio * cantidad);
        //total = total + (precio * cantidad);
        
    }
    //document.getElementsByClassName('total-carrito')[0].innerText = '$' + total;
}*/