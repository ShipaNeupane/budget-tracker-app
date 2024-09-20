import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTransaction as addTransactionAPI } from '../../api.js';
import './AddTransaction.scss';

const AddTransaction = ({ addTransaction }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();

    const transactionData = {
        amount: type === 'inflow' ? `+ $${amount}` : `- $${amount}`,
        category,
        date,
        type: type.charAt(0).toUpperCase() + type.slice(1),
    };

    // Use the API to send data to the backend
    addTransactionAPI(transactionData)
        .then(() => {
        // Add the new transaction to local state in App.js
        addTransaction(transactionData);

        // Redirect back to Home page
        navigate('/');
        })
        .catch((error) => {
        console.error('Error adding transaction:', error);
        });
    };

    return (
    <form onSubmit={handleSubmit}>
        <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />

        <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        />

        <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="inflow">Inflow</option>
        <option value="outflow">Outflow</option>
        </select>

        <button type="submit">Add Transaction</button>
        
    </form>
    );
};

export default AddTransaction;
