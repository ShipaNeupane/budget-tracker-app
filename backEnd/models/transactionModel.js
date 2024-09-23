import db from '../config/db.js';

// Add a new transaction
export const addTransaction = (transaction, callback) => {
    const { amount, date, category, type } = transaction;
    db.run(
        `INSERT INTO transactions (amount, date, category, type) VALUES (?, ?, ?, ?)`,
        [amount, date, category, type],
        callback
    );
};

// Get all transactions
export const getTransactions = (callback) => {
    db.all(`SELECT * FROM transactions`, callback);
};

// Update transaction by ID
export const updateTransactionById = (id, transaction, callback) => {
    const { amount, date, category, type } = transaction;
    db.run(
        `UPDATE transactions SET amount = ?, date = ?, category = ?, type = ? WHERE id = ?`,
        [amount, date, category, type, id],
        callback
    );
};

// Delete transaction by ID
export const deleteTransactionById = (id, callback) => {
    db.run(`DELETE FROM transactions WHERE id = ?`, [id], callback);
};
