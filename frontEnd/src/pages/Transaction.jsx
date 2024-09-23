import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import AddTransaction from '../components/AddTransaction/AddTransaction';
import Footer from '../components/Footer/Footer';

const Transaction = ({ addTransaction }) => {
    return (
        <>
        <Navbar />
        <AddTransaction addTransaction={addTransaction} />
        <Footer />
        </>
    );
};

export default Transaction;
