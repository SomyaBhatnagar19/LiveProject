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

  // Add a new product
router.post('/', async (req, res) => {
  try {
      const { productName, category, subCategory, units, rate, mrp, openingBalance } = req.body;

      // Validate input (add more validation as needed)
      if (!productName || !category || !subCategory || !units || !rate || !mrp || !openingBalance) {
          return res.status(400).json({ error: 'Missing required fields' });
      }

      const newProduct = await ProductMasterModel.addProduct({
          productName,
          category,
          subCategory,
          units,
          rate,
          mrp,
          openingBalance,
      });

      res.status(201).json(newProduct);
  } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

  module.exports = router;