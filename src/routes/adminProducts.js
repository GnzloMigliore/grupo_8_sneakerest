const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '..','..','public','images','zapatillas'));
  },
  filename: function (req, file, cb) {
    cb(null, 'zapatilla-'+Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage });

const controllersAdminProducts = require(path.resolve(__dirname, '..', 'controllers', 'controllersAdminProducts'));

//Middlewares
const creacionProductos = require(path.resolve(__dirname, '..', 'middlewares', 'creacionProductos'));
const editProductos = require(path.resolve(__dirname, '..', 'middlewares', 'editProductos'));
const adminOnly = require(path.resolve(__dirname, '..', 'middlewares', 'adminOnly'));


router.get('/adminProducts', adminOnly, controllersAdminProducts.index);
router.get("/adminProducts/create", adminOnly, controllersAdminProducts.create);
router.post('/adminProducts/create', upload.any('imagen[]'), adminOnly, creacionProductos, controllersAdminProducts.save);
router.get('/adminProducts/detail/:id', adminOnly, controllersAdminProducts.show);
router.get("/adminProducts/delete/:id", adminOnly, controllersAdminProducts.destroy);
router.get("/adminProducts/edit/:id", adminOnly, controllersAdminProducts.edit);
router.put("/adminProducts/edit/:id", adminOnly, upload.any('imagen[]'), editProductos, controllersAdminProducts.updateZapatillas);
/********************* Filtros por marca en admin **********************/
router.get('/adminProducts/adidas', adminOnly, controllersAdminProducts.adidas);
router.get('/adminProducts/converse', adminOnly, controllersAdminProducts.converse);
router.get('/adminProducts/dc-shoes', adminOnly, controllersAdminProducts.dcShoes);
router.get('/adminProducts/new-balance', adminOnly, controllersAdminProducts.newBalance);
router.get('/adminProducts/nike', adminOnly, controllersAdminProducts.nike);
router.get('/adminProducts/reebok', adminOnly, controllersAdminProducts.reebok);
router.get('/adminProducts/vans', adminOnly, controllersAdminProducts.vans);

module.exports = router;

