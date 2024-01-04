/* /backend/model/productMasterModel.js */

const createConnection = require("./database");

const ProductMasterModel = {
  initialize: async () => {
    try {
      const connection = await createConnection();

      // Create the ProductMaster table with the correct database name
      await connection.query(`
        CREATE TABLE IF NOT EXISTS ProductMaster (
          id INT AUTO_INCREMENT PRIMARY KEY,
          productName VARCHAR(255) NOT NULL,
          category VARCHAR(255) NOT NULL,
          subCategory VARCHAR(255) NOT NULL,
          units VARCHAR(255) NOT NULL,
          rate FLOAT NOT NULL,
          mrp FLOAT NOT NULL,
          openingBalance FLOAT NOT NULL
        )
      `);

      connection.end();
      console.log("ProductMaster table initialized successfully.");
    } catch (err) {
      console.error("Error in initializing ProductMaster table.", err);
    }
  },

  // Fetch all data
  getAllProducts: async () => {
    try {
      const connection = await createConnection();
      const [rows] = await connection.query("SELECT * FROM ProductMaster");
      connection.end();
      return rows;
    } catch (err) {
      console.error("Error fetching products.", err);
      throw err;
    }
  },

  // Add new product
  addProduct: async (product) => {
    try {
      const connection = await createConnection();

      // Insert the new product into the ProductMaster table
      const [result] = await connection.query(
        `
          INSERT INTO ProductMaster 
          (productName, category, subCategory, units, rate, mrp, openingBalance) 
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
        [
          product.productName,
          product.category,
          product.subCategory,
          product.units,
          product.rate,
          product.mrp,
          product.openingBalance,
        ]
      );

      // Get the inserted product details
      const [newProduct] = await connection.query(
        "SELECT * FROM ProductMaster WHERE id = ?",
        [result.insertId]
      );

      connection.end();

      return newProduct[0];
    } catch (err) {
      console.error("Error adding product.", err);
      throw err;
    }
  },
};

// Initialize the table when the module is imported
ProductMasterModel.initialize();

module.exports = ProductMasterModel;
