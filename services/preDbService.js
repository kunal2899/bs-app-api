const pool = require("../config/dbConfig");

async function start() {
    try {
        await pool.connect();
        console.log("Database connection successful...");
        await pool.query(`CREATE TABLE IF NOT EXISTS books (
            id SERIAL PRIMARY KEY,
            identifier VARCHAR(15) UNIQUE NOT NULL,
            name VARCHAR(50) NOT NULL,
            description TEXT NOT NULL,
            author_name VARCHAR(50) NOT NULL
        )`);
        await pool.query(`CREATE TABLE IF NOT EXISTS reviews (
            id SERIAL PRIMARY KEY,
            book_id INTEGER NOT NULL REFERENCES books(id),
            rating SMALLINT NOT NULL,
            review TEXT NOT NULL
        )`)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { start }