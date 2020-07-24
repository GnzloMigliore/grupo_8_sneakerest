const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '..','..','public','images','usuarios'));
    },
    filename: function (req, file, cb) {
      cb(null, 'usuario-'+Date.now() + path.extname(file.originalname));
    }
  })

  const upload = multer({ storage });

//Requerir el modulo de los controladores
const controllersUser = require(path.resolve(__dirname, '..', 'controllers', 'controllersUser'));

router.get('/login', controllersUser.index);
router.get("/login/registro", controllersUser.create);
router.post("/login/registro", upload.single('imagen'),controllersUser.save);
router.get('/recover', controllersUser.recover);

module.exports = router;