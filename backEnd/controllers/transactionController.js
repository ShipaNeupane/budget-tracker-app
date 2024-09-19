import { addTransaction, getTransactions } from '../models/transactionModel.js';

export const createTransaction = (req, res) => {
    const transaction = req.body;
    addTransaction(transaction, (err) => {
        if (err) {
        res.status(500).json({ message: 'Error adding transaction' });
        } else {
        res.status(201).json({ message: 'Transaction added successfully' });
        }
    });
};

export const getAllTransactions = (req, res) => {
    getTransactions((err, rows) => {
        if (err) {
        res.status(500).json({ message: 'Error retrieving transactions' });
        } else {
        res.status(200).json(rows);
        }
    });
};
