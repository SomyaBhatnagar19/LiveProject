const express = require('express');
const router = express.Router();
const UnitModel = require('../model/unitsModel');

// Get all units
router.get('/units', async (req, res) => {
  try {
    // Fetch units from the database
    const units = await UnitModel.getAllUnits();
    res.json(units);
  } catch (error) {
    console.error('Error fetching units:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new unit
router.post('/units', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    const unitData = { name };
    const newUnitId = await UnitModel.createUnit(unitData);
    res.status(201).json({ id: newUnitId, name });
  } catch (error) {
    console.error('Error adding unit:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
