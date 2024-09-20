import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addTransaction as addTransactionAPI } from '../../api.js'; 
import back from "../../assets/icons/arrow.png"
import './AddTransaction.scss';

const AddTransaction = ({ addTransaction }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [customCategory, setCustomCategory] = useState(''); // For 'Other' category input
    const [date, setDate] = useState('');
    const [type, setType] = useState('Inflow');
    const [showCustomCategory, setShowCustomCategory] = useState(false); // To toggle custom input for "Other"
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const selectedCategory = category === 'Others' ? customCategory : category;
        const transactionData = {
        amount,
        category: selectedCategory,
        date,
        type,
        };

        // Use the addTransaction function from api.js to send the data to the backend
        addTransactionAPI(transactionData)
        .then(() => {
            // Call the addTransaction passed from the parent component to update the UI
            addTransaction(transactionData);

            // After successful submission, navigate back to the homepage
            navigate('/');
        })
        .catch((error) => {
            console.error('Error adding transaction:', error);
        });
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);

        // If the user selects 'Others', show the custom category input
        setShowCustomCategory(selectedCategory === 'Others');
    };

    return (
        <div className="transaction-container">
        {/* Back arrow to navigate back to homepage */}
        <div className="back-arrow"><Link to="/"> <img src={back} alt="back arrow" /></Link></div>

        <h2>Log a Transaction</h2>
        
        <form onSubmit={handleSubmit}>
            {/* Amount Input Field */}
            <div className="form-group">
            <label>Amount</label>
            <input
                type="number"
                placeholder="$0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            </div>

            {/* Category Dropdown */}
            <div className="form-group">
            <label>Category</label>
            <select value={category} onChange={handleCategoryChange} required>
                <option value="">Select Category</option>
                <option value="Salary">Salary</option>
                <option value="Tax returns">Tax returns</option>
                <option value="Phone bill">Phone bill</option>
                <option value="Hydro bill">Hydro bill</option>
                <option value="Gas bill">Gas bill</option>
                <option value="Car expenses">Car expenses</option>
                <option value="Internet bill">Internet bill</option>
                <option value="Grocery">Grocery</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Property tax">Property tax</option>
                <option value="Mortgage">Mortgage</option>
                <option value="Others">Others</option>
            </select>

            {/* Show custom input field if 'Others' is selected */}
            {showCustomCategory && (
                <input
                type="text"
                placeholder="Enter custom category"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                required
                />
            )}
            </div>

            {/* Date Picker */}
            <div className="form-group">
            <label>Date</label>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            </div>

            {/* Type Dropdown (Inflow/Outflow) */}
            <div className="form-group">
            <label>Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)} required>
                <option value="Inflow">Inflow</option>
                <option value="Outflow">Outflow</option>
            </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">Add Transaction</button>
        </form>
        </div>
    );
};

export default AddTransaction;
