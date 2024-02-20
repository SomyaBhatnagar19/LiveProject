/* /backend/model/productMasterModel.js */

const createConnection = require("./database");
const SubcategoryModel = require('./subcategoryModel');
const CategoryModel = require('./categoryModel');
const UnitModel = require('./unitsModel');
const { connect } = require("../controller/productMasterController");

const ProductMasterModel = {
  initialize: async () => {
    try {
      const connection = await createConnection();

      // Create the ProductMaster table with the correct database name
      await connection.query(`
        CREATE TABLE IF NOT EXISTS ProductMaster (
          id INT AUTO_INCREMENT PRIMARY KEY,
          productName VARCHAR(255) NOT NULL,
          category INT NOT NULL,
          subCategory INT NOT NULL,
          units INT NOT NULL,
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

    // Fetch products with category, subcategory, and unit names
    const [rows] = await connection.query(`
    SELECT a.id, a.productName, a.category as categoryId, b.name as category, a.subCategory as subCategoryId, c.name as subCategory, a.units as unitsId,d.name as unit, a.rate, a.mrp, a.openingBalance FROM inventory.productmaster a, inventory.category b, inventory.subCategory c, inventory.unit d WHERE a.category=b.id and a.subCategory=c.id and a.units=d.id; 
    `);

    connection.end();

    // Return fetched products with additional details
    return rows.map((product) => ({
      id: product.id,
      productName: product.productName,
      category: product.category,
      subCategory: product.subCategory,
      unit: product.unit,
      rate: product.rate,
      mrp: product.mrp,
      openingBalance: product.openingBalance,
    }));
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


  // Delete product by ID
  deleteProduct: async (productId) => {
    try {
      const connection = await createConnection();

      // Delete the product from the ProductMaster table by ID
      await connection.query('DELETE FROM ProductMaster WHERE id = ?', [productId]);

      connection.end();
      console.log(`Product with ID ${productId} deleted successfully.`);
    } catch (err) {
      console.error(`Error deleting product with ID ${productId}.`, err);
      throw err;
    }
  },

  // Add the following function to update a product by ID
  updateProduct: async (id, updatedProduct) => {
    try {
      const connection = await createConnection();
  
      // Update the product in the ProductMaster table
      const query =
        "UPDATE ProductMaster SET productName=?, category=?, subCategory=?, units=?, rate=?, mrp=?, openingBalance=? WHERE id=?";
      const [result] = await connection.query(query, [
        updatedProduct.productName,
        updatedProduct.category,
        updatedProduct.subCategory,
        updatedProduct.units,
        updatedProduct.rate,
        updatedProduct.mrp,
        updatedProduct.openingBalance,
        id,
      ]);
  
      // Close the connection
      connection.end();
      console.log(`Product with ID ${id} updated successfully.`);
      // Check if the update was successful
      if (result.affectedRows > 0) {
        // Return the updated product ID
        return id;
      } else {
        throw new Error("Product not found");
      }
    } catch (error) {
      console.error("Error updating product.", error);
      throw error;
    }
  },
  
}

// Initialize the table when the module is imported
ProductMasterModel.initialize();

module.exports = ProductMasterModel;
