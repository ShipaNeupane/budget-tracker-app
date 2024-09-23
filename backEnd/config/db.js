import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./budgetApp.db');

// Create users, transactions, and goals tables if they don't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        amount REAL,
        date TEXT,
        category TEXT,
        type TEXT
    )`);
});

export default db;
