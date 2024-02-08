const createConnection = require("./database");

const UnitModel = {
  initialize: async () => {
    try {
      const connection = await createConnection();

      // Create the Unit table if it doesn't exist
      await connection.query(`
        CREATE TABLE IF NOT EXISTS Unit (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL
        )
      `);

      connection.end();
      console.log("Unit table initialized successfully.");
    } catch (err) {
      console.error("Error in initializing Unit table:", err);
    }
  },

  getAllUnits: async () => {
    try {
      const connection = await createConnection();
      const [rows] = await connection.query("SELECT id, name FROM Unit");
      connection.end();
      return rows;
    } catch (error) {
      console.error("Error fetching units:", error);
      throw error;
    }
  },

  createUnit: async (unitData) => {
    try {
      const connection = await createConnection();
      const [result] = await connection.query("INSERT INTO Unit SET ?", unitData);
      connection.end();
      return result.insertId;
    } catch (error) {
      console.error("Error creating unit:", error);
      throw error;
    }
  }
};

// Initialize the Unit table
UnitModel.initialize();

module.exports = UnitModel;
