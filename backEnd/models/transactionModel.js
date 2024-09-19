import db from '../config/db.js';

export const addTransaction = (transaction, callback) => {
    const { amount, date, category, type } = transaction;
    db.run(
        `INSERT INTO transactions (amount, date, category, type) VALUES (?, ?, ?, ?)`,
        [amount, date, category, type],
        callback
    );
};

export const getTransactions = (callback) => {
  db.all(`SELECT * FROM transactions`, callback);
};
