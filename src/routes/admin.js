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

router.get('/admin', controllersAdmin.index);
router.get("/admin/create", controllersAdmin.create);
router.post("/admin/create", upload.any('imagen'), controllersAdmin.save);
router.get('/admin/detail/:id', controllersAdmin.show);
router.get("/delete/:id", controllersAdmin.destroy);
router.get("/edit/:id", controllersAdmin.edit);
router.put("/edit/:id", upload.any('imagen'), controllersAdmin.updateZapatillas);
module.exports = router;