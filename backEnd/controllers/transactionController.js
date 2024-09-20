import { addTransaction, getTransactions } from '../models/transactionModel.js';

export const createTransaction = (req, res) => {
    const { amount, date, category, type } = req.body;

    // Ensure required fields are present
    if (!amount || !date || !category || !type) {
    return res.status(400).json({
        message: 'Missing required fields: amount, date, category, or type',
    });
    }

    // Check if amount is a valid number
    if (isNaN(amount)) {
    return res.status(400).json({
        message: 'Amount must be a valid number',
    });
    }

    // If validation passes, add the transaction to the DB
    addTransaction(req.body, (err) => {
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
