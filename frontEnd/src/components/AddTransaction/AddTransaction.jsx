import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { addTransaction as addTransactionAPI, updateTransaction as updateTransactionAPI } from '../../api.js'; 
import back from "../../assets/icons/arrow.png";
import './AddTransaction.scss';

const AddTransaction = ({ addTransaction, updateTransaction }) => {
    const location = useLocation();
    const transactionToEdit = location.state ? location.state.transactionToEdit : null;
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [customCategory, setCustomCategory] = useState(''); // For 'Other' category input
    const [date, setDate] = useState('');
    const [type, setType] = useState('Inflow');
    const [showCustomCategory, setShowCustomCategory] = useState(false); // To toggle custom input for "Other"
    const navigate = useNavigate();

    // Pre-fill the form if editing an existing transaction
    useEffect(() => {
        if (transactionToEdit) {
            setAmount(transactionToEdit.amount);
            setCategory(transactionToEdit.category === 'Others' ? '' : transactionToEdit.category); // Use custom field if it's "Others"
            setCustomCategory(transactionToEdit.category === 'Others' ? transactionToEdit.category : '');
            setDate(transactionToEdit.date);
            setType(transactionToEdit.type);
            setShowCustomCategory(transactionToEdit.category === 'Others');
        }
    }, [transactionToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedCategory = category === 'Others' ? customCategory : category;
        const transactionData = {
            amount,
            category: selectedCategory,
            date,
            type,
        };

        // If editing a transaction
        if (transactionToEdit) {
            updateTransactionAPI(transactionToEdit.id, transactionData)
                .then(() => {
                    navigate('/'); // Navigate back to the homepage after editing
                })
                .catch((error) => {
                    console.error('Error updating transaction:', error);
                });
        } else {
            // If adding a new transaction
            addTransactionAPI(transactionData)
                .then(() => {
                    addTransaction(transactionData); // Call parent function to update the list
                    navigate('/'); // Navigate back to the homepage after submission
                })
                .catch((error) => {
                    console.error('Error adding transaction:', error);
                });
        }
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
            <div className="back-arrow">
                <Link to="/"> <img src={back} alt="back arrow" /></Link>
            </div>

            <h2>{transactionToEdit ? 'Edit Transaction' : 'Log a Transaction'}</h2>
            
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
                <button type="submit" className="submit-button">
                    {transactionToEdit ? 'Save Transaction' : 'Add Transaction'}
                </button>
            </form>
        </div>
    );
};

export default AddTransaction;
