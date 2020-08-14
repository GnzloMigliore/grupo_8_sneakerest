const express = require('express');
const app = express();
const path = require('path');

const methodOverride = require("method-override");

const session = require('express-session');
const cookieParser = require('cookie-parser');

// Requiero el middleware para recordar el usuario en la vista
const recordarUser = require ('./middlewares/recordarUser');

// Indico a node donde están los archivos estáticos
app.use(express.static(path.resolve(__dirname, '..','public')))

app.set('view engine','ejs');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Aquí requerimos nuestros middlewares de session y cookies
app.use(session({
    secret : 'topSecret',
    resave: true,
    saveUninitialized: true,
}));
//Aqui coloco el Middleware para activar lo referido a las cookies
app.use(cookieParser());

// Requiero el middleware para recordar el usuario en la vista
app.use(recordarUser);


const webRouter = require('./routes/web');
const userRouter = require('./routes/user');
const pagoRouter = require('./routes/pago');
const ProductosRouter = require('./routes/productos');
const adminProductosRoutes = require('./routes/adminProducts');
const adminUsersRoutes = require('./routes/adminUsers');
const soporteRouter = require ('./routes/soporte');

app.use(webRouter);
app.use(userRouter);
app.use(ProductosRouter);
app.use(pagoRouter);
app.use(adminProductosRoutes);
app.use(adminUsersRoutes);
app.use(soporteRouter);


//Activar servidor
app.listen(3000,'localhost',() =>  console.log('servidor corriendo en el puerto 3000'));

