const express = require('express');
const router = express.Router();
const SubcategoryModel = require('../model/subcategoryModel');

// Get all subcategories
// Example backend route handler for fetching subcategories
router.get('/subcategories', async (req, res) => {
    try {
      // Fetch subcategories from the database
      const subcategories = await SubcategoryModel.getAllSubcategories();
      res.json(subcategories);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Add a new subcategory
router.post('/subcategories', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    const subcategoryData = { name };
    const newSubcategoryId = await SubcategoryModel.createSubcategory(subcategoryData);
    res.status(201).json({ id: newSubcategoryId, name });
  } catch (error) {
    console.error('Error adding subcategory:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
