/* /backend/controller/categoryController.js */

const express = require('express');
const router = express.Router();
const CategoryModel = require('../model/categoryModel');

router.get('/categories', async (req, res) => {
  try {
    const categories = await CategoryModel.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error getting categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/categories', async (req, res) => {
  try {
    const categoryId = await CategoryModel.createCategory(req.body);
    res.status(201).json({ id: categoryId, message: 'Category created successfully' });
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
