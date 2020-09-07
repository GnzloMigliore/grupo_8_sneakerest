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

const controllersAdmin = require(path.resolve(__dirname, '..', 'controllers', 'controllersAdmin'));

//Middlewares
const adminOnly = require(path.resolve(__dirname, '..', 'middlewares', 'adminOnly'));

router.get('/admin', adminOnly, controllersAdmin.index);
router.get("/admin/create", adminOnly, controllersAdmin.create);
router.post("/admin/create", adminOnly, upload.any(), controllersAdmin.save);
router.get('/admin/detail/:id', adminOnly, controllersAdmin.show);
router.get("/delete/:id", adminOnly, controllersAdmin.destroy);
router.get("/edit/:id", adminOnly, controllersAdmin.edit);
router.put("/edit/:id", adminOnly, upload.any(), controllersAdmin.updateZapatillas);
module.exports = router;