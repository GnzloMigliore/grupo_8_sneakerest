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

const controllersAdminUsers = require(path.resolve(__dirname, '..', 'controllers', 'controllersAdminUsers'));

router.get('/adminUsers', controllersAdminUsers.index);
router.get('/adminUsers/detail/:email', controllersAdminUsers.show);
router.get("/adminUsers/delete/:email", controllersAdminUsers.destroy);
router.get("/adminUsers/edit/:email", controllersAdminUsers.edit);
router.put("/adminUsers/edit/:email", controllersAdminUsers.updateRole);


module.exports = router;

