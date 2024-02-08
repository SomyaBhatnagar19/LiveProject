/* /backend/server.js */

const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors'); 

const productMasterController = require('./controller/productMasterController');
const categoryController = require('./controller/categoryController');
const subcategoriesController = require('./controller/subcategoryController');
const unitsController = require('./controller/unitsController');

const app = express();

app.use(cors());

app.use(bodyParser.json());

// Use the productMasterController for handling product-related routes
app.use('/productMaster', productMasterController);

//for catgeory drop down
app.use('/dropdownOne', categoryController);

//for sub-catgeory drop down
app.use('/dropdownTwo', subcategoriesController);

//for units drop down
app.use('/dropdownThree', unitsController);

app.listen(3001, () => {
    console.log(`Server is running on port 3001.`);
});
  