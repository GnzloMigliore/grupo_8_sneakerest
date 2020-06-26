const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.resolve(__dirname, '..','public')))
const webRouter = require('./routes/web')



app.use(webRouter);


//Activar servidor
app.listen(3000,'localhost',() =>  console.log('servidor corriendo en el puerto 3000'));

