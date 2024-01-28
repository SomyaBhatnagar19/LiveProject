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

// Delete a product by ID
router.delete('/:id', async (req, res) => {
  try {
    const productId = req.params.id;

    // Call the model function to delete the product from the database
    const result = await ProductMasterModel.deleteProduct(productId);

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a product by ID
router.put('/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const { productName, category, subCategory, units, rate, mrp, openingBalance } = req.body;

    // Validate input (add more validation as needed)
    if (!productName || !category || !subCategory || !units || !rate || !mrp || !openingBalance) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Call the model function to update the product in the database
    const updatedProduct = await ProductMasterModel.updateProduct({
      id: productId,
      productName,
      category,
      subCategory,
      units,
      rate,
      mrp,
      openingBalance,
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error', error });
  }
});

module.exports = router;