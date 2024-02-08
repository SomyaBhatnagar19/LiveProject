const createConnection = require("./database");

const SubcategoryModel = {
  initialize: async () => {
    try {
      const connection = await createConnection();

      // Create the Subcategory table if it doesn't exist
      await connection.query(`
        CREATE TABLE IF NOT EXISTS Subcategory (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL
        )
      `);

      connection.end();
      console.log("Subcategory table initialized successfully.");
    } catch (err) {
      console.error("Error in initializing Subcategory table:", err);
    }
  },

  getAllSubcategories: async () => {
    try {
      const connection = await createConnection();
      const [rows] = await connection.query("SELECT id, name FROM Subcategory");
      connection.end();
      return rows;
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      throw error;
    }
  },

  createSubcategory: async (subcategoryData) => {
    try {
      const connection = await createConnection();
      const [result] = await connection.query("INSERT INTO Subcategory SET ?", subcategoryData);
      connection.end();
      return result.insertId;
    } catch (error) {
      console.error("Error creating subcategory:", error);
      throw error;
    }
  }
};

// Initialize the Subcategory table
SubcategoryModel.initialize();

module.exports = SubcategoryModel;
