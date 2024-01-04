/* /backend/database.js */

const mysql = require("mysql2/promise");

const createConnection = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Somya@1901b',
        database: 'inventory',
    });
    return connection;
};

module.exports = createConnection;

