const express = require('express');
const router = express.Router();
const path = require('path');



const controllersAdmin = require(path.resolve(__dirname, '..', 'controllers', 'controllersAdmin'));

router.get('/admin', controllersAdmin.index);
router.get("/administrar/create", controllersAdmin.create);
module.exports = router;