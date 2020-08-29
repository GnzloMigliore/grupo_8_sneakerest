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

//Middlewares
const creacionProductos = require(path.resolve(__dirname, '..', 'middlewares', 'creacionProductos'));

const controllersAdminProducts = require(path.resolve(__dirname, '..', 'controllers', 'controllersAdminProducts'));

router.get('/adminProducts', controllersAdminProducts.index);
router.get("/adminProducts/create", controllersAdminProducts.create);
router.post('/adminProducts/create', upload.any('imagen[]'), creacionProductos, controllersAdminProducts.save);
router.get('/adminProducts/detail/:id', controllersAdminProducts.show);
router.get("/adminProducts/delete/:id", controllersAdminProducts.destroy);
router.get("/adminProducts/edit/:id", controllersAdminProducts.edit);
router.put("/adminProducts/edit/:id", upload.any('imagen[]'), controllersAdminProducts.updateZapatillas);
module.exports = router;

