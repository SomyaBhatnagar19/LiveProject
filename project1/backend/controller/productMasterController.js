/* /backend/controller/productMasterController.js */

const express = require('express');

const router = express.Router();

const ProductMasterModel = require('../model/productMasterModel');

// Get all products
router.get('/', async (req, res) => {
    try {
      // Call the model function to retrieve all products from the database
      const products = await ProductMasterModel.getAllProducts();
  
      res.status(200).json(products);
    } catch (error) {
      console.error('Error getting products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;