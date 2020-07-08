const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.resolve(__dirname, '..','public')))


const webRouter = require('./routes/web')
const userRouter = require('./routes/user')
const pagoRouter = require('./routes/pago')
const ProductosRouter = require('./routes/productos')


app.use(webRouter);
app.use(userRouter);
app.use(ProductosRouter);
app.use(pagoRouter);

//Activar servidor
app.listen(3000,'localhost',() =>  console.log('servidor corriendo en el puerto 3000'));

