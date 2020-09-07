const express = require('express');
const router = express.Router();
const path = require('path');
const controllersProductos = require('../controllers/controllersProductos');


router.get('/productos', controllersProductos.productos);
router.get('/productos/detalle/:id', controllersProductos.detail);
//rutas de filtros
router.get('/productos/novedades', controllersProductos.novedades);
//router.get('/productos/mas-vendidos', controllersProductos.vendidos);
router.get('/productos/orden-menor-mayor', controllersProductos.menor);
router.get('/productos/orden-mayor-menor', controllersProductos.mayor);
router.get('/productos/sale', controllersProductos.sale)
router.get('/productos/hombre', controllersProductos.hombre)
router.get('/productos/mujer', controllersProductos.mujer)
router.get('/productos/ninos', controllersProductos.ninos)
//Rutas filtro por marca
router.get('/productos/adidas', controllersProductos.adidas);
router.get('/productos/converse', controllersProductos.converse);
router.get('/productos/dc-shoes', controllersProductos.dcShoes);
router.get('/productos/new-balance', controllersProductos.newBalance);
router.get('/productos/nike', controllersProductos.nike);
router.get('/productos/reebok', controllersProductos.reebok);
router.get('/productos/vans', controllersProductos.vans);

module.exports = router;