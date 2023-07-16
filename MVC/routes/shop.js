const path = require('path');

const express = require('express');
const shopController = require('../controllers/shop')

const rootDir = require('../util/path');
const adminData = require('../controllers/product');

const router = express.Router();

router.get('/', shopController.getShop);

module.exports = router;
