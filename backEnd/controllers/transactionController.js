import { addTransaction, getTransactions, updateTransactionById, deleteTransactionById } from '../models/transactionModel.js';

// Create a new transaction
export const createTransaction = (req, res) => {
    const { amount, date, category, type } = req.body;

    if (!amount || !date || !category || !type) {
        return res.status(400).json({ message: 'Missing required fields: amount, date, category, or type' });
    }

    if (isNaN(amount)) {
        return res.status(400).json({ message: 'Amount must be a valid number' });
    }

    addTransaction(req.body, (err) => {
        if (err) {
            res.status(500).json({ message: 'Error adding transaction' });
        } else {
            res.status(201).json({ message: 'Transaction added successfully' });
        }
    });
};

// Get all transactions
export const getAllTransactions = (req, res) => {
    getTransactions((err, rows) => {
        if (err) {
            res.status(500).json({ message: 'Error retrieving transactions' });
        } else {
            res.status(200).json(rows);
        }
    });
};

// Update a transaction by ID (Edit)
export const updateTransaction = (req, res) => {
    const { id } = req.params;
    const { amount, date, category, type } = req.body;

    if (!amount || !date || !category || !type) {
        return res.status(400).json({ message: 'Missing required fields: amount, date, category, or type' });
    }

    if (isNaN(amount)) {
        return res.status(400).json({ message: 'Amount must be a valid number' });
    }

    updateTransactionById(id, req.body, (err) => {
        if (err) {
            res.status(500).json({ message: 'Error updating transaction' });
        } else {
            res.status(200).json({ message: 'Transaction updated successfully' });
        }
    });
};

// Delete a transaction by ID
export const deleteTransaction = (req, res) => {
    const { id } = req.params;

    deleteTransactionById(id, (err) => {
        if (err) {
            res.status(500).json({ message: 'Error deleting transaction' });
        } else {
            res.status(200).json({ message: 'Transaction deleted successfully' });
        }
    });
};
