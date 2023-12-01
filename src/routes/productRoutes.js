// routes/productSellingStoryRoutes.js
const express = require('express');
const router = express.Router();
const { getProductSellingStory } = require('../controllers/productController');

router.post('/sku/product-selling-stories/fetch', getProductSellingStory);

module.exports = router;
