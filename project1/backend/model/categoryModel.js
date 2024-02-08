const createConnection = require("./database");

const CategoryModel = {
  initialize: async () => {
    try {
      const connection = await createConnection();

      // Create the Category table if it doesn't exist
      await connection.query(`
        CREATE TABLE IF NOT EXISTS Category (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL
        )
      `);

      connection.end();
      console.log("Category table initialized successfully.");
    } catch (err) {
      console.error("Error in initializing Category table:", err);
    }
  },

  getAllCategories: async () => {
    try {
      const connection = await createConnection();
      const [rows] = await connection.query("SELECT id, name FROM Category");
      connection.end();
      return rows;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },

  createCategory: async (categoryData) => {
    try {
      const connection = await createConnection();
      const [result] = await connection.query("INSERT INTO Category SET ?", categoryData);
      connection.end();
      return result.insertId;
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  }
};

// Initialize the Category table
CategoryModel.initialize();

module.exports = CategoryModel;
