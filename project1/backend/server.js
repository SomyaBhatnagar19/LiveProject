/* /backend/server.js */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Correct package name

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(3001, () => {
    console.log(`Server is running on port 3001.`);
});
  