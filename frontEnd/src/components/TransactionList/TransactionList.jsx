import React, { useState } from 'react';
import Modal from '../Modal/Modal.jsx';
import './TransactionList.scss';
import Edit from '../../assets/icons/edit.svg';
import Delete from '../../assets/icons/delete.svg';

const TransactionList  = ({ transactions, onEditTransaction, onDeleteTransaction }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const formatAmount = (amount, type) => {
        const formattedAmount = parseFloat(amount).toFixed(2);
        return type === 'Inflow' ? `+ $${formattedAmount}` : `- $${formattedAmount}`;
    };

    const handleDeleteClick = (transaction) => {
        setSelectedTransaction(transaction);
        setModalOpen(true);
    };

    const handleConfirmDelete = () => {
        onDeleteTransaction(selectedTransaction.id);
        setModalOpen(false);
    };

    return (
        <section className="transactions">
            <h3>Latest Transactions</h3>
            <table>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td className={transaction.type === 'Inflow' ? 'inflow' : 'outflow'}>
                                {formatAmount(transaction.amount, transaction.type)}
                            </td>
                            <td>{transaction.category || 'N/A'}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.type}</td>
                            <td>
                                <img 
                                    src={Edit} 
                                    alt="Edit" 
                                    className="icon" 
                                    onClick={() => onEditTransaction(transaction)} 
                                />
                                <img 
                                    src={Delete} 
                                    alt="Delete" 
                                    className="icon" 
                                    onClick={() => handleDeleteClick(transaction)} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <Modal 
                    title="Are you sure you want to delete this transaction?" 
                    message="This action cannot be undone!"
                    onConfirm={handleConfirmDelete} 
                    onCancel={() => setModalOpen(false)} 
                />
            )}
        </section>
    );
};

export default TransactionList;
