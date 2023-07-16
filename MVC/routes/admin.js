const path = require('path');
const getProductController = require('../controllers/product')

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',getProductController.productController );

// /admin/add-product => POST
router.post('/add-product',getProductController.postAddproduct );

module.exports = router;

