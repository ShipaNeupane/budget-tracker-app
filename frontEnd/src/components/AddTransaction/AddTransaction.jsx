import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTransaction as addTransactionAPI } from '../../api.js';
import './AddTransaction.scss';

const AddTransaction = ({ addTransaction }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');

    const navigate = useNavigate(); // For redirecting after submission

    const handleSubmit = (e) => {
        e.preventDefault();
        const transactionData = {
        amount: type === 'inflow' ? `+ $${amount}` : `- $${amount}`,
        category,
        date,
        type
        };

        // Use the API to send data to the backend
        addTransactionAPI(transactionData)
        .then((response) => {
            // Assuming the API call was successful, also update local state
            addTransaction(transactionData); // Update the local state in App.js

            // Redirect to the TransactionList page
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
            <option value="Inflow">Inflow</option>
            <option value="Outflow">Outflow</option>
        </select>
        <button type="submit">Add Transaction</button>
        </form>
    );
};

export default AddTransaction;
