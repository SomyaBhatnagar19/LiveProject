/* /backend/server.js */

const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors'); 

const productMasterController = require('./controller/productMasterController');

const app = express();

app.use(cors());

app.use(bodyParser.json());

// Use the productMasterController for handling product-related routes
app.use('/productMaster', productMasterController);

app.listen(3001, () => {
    console.log(`Server is running on port 3001.`);
});
  