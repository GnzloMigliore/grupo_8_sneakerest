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

router.get('/adminProducts', controllersAdminProducts.index);
router.get("/adminProducts/create", controllersAdminProducts.create);
router.post('/adminProducts/create', upload.any('imagen[]'), creacionProductos, controllersAdminProducts.save);
router.get('/adminProducts/detail/:id', controllersAdminProducts.show);
router.get("/adminProducts/delete/:id", controllersAdminProducts.destroy);
router.get("/adminProducts/edit/:id", controllersAdminProducts.edit);
router.put("/adminProducts/edit/:id", upload.any('imagen[]'), editProductos, controllersAdminProducts.updateZapatillas);
/********************* Filtros por marca en admin **********************/
router.get('/adminProducts/adidas', controllersAdminProducts.adidas);
router.get('/adminProducts/converse', controllersAdminProducts.converse);
router.get('/adminProducts/dc-shoes', controllersAdminProducts.dcShoes);
router.get('/adminProducts/new-balance', controllersAdminProducts.newBalance);
router.get('/adminProducts/nike', controllersAdminProducts.nike);
router.get('/adminProducts/reebok', controllersAdminProducts.reebok);
router.get('/adminProducts/vans', controllersAdminProducts.vans);

module.exports = router;

