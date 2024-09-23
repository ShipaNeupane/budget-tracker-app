import express from 'express';
import { createTransaction, getAllTransactions, updateTransaction, deleteTransaction } from '../controllers/transactionController.js';

const router = express.Router();

// Add new transaction
router.post('/', createTransaction);

// Get all transactions
router.get('/', getAllTransactions);

// Update a transaction (Edit)
router.put('/:id', updateTransaction);

// Delete a transaction
router.delete('/:id', deleteTransaction);

export default router;
