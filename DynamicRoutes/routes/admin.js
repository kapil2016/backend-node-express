const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

router.get('/edit-product/:productId', adminController.editProduct);
router.post('/edit-product/:productId', adminController.postEditProduct);
router.post('/delete-product/:productId', adminController.deleteProduct)

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
