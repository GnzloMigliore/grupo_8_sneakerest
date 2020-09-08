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
const adminOnly = require(path.resolve(__dirname, '..', 'middlewares', 'adminOnly'));

router.get('/adminUsers', adminOnly, controllersAdminUsers.index);
router.get('/adminUsers/detail/:id', adminOnly, controllersAdminUsers.show);
router.get("/adminUsers/delete/:id", adminOnly, controllersAdminUsers.destroy);
router.get("/adminUsers/edit/:id", adminOnly, controllersAdminUsers.edit);
router.put("/adminUsers/edit/:id", adminOnly, controllersAdminUsers.updateRole);


module.exports = router;

