import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTransaction, deleteTransaction } from '../services/api';
import './Show.css';

const Show = () => {
    // Get the transaction ID from the URL parameters
    const { id } = useParams();
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState(null);

    useEffect(() => {
        getTransaction(id)
            .then(data => setTransaction(data))
            .catch(error => console.error('Error fetching transaction:', error));
    }, [id]);

    const handleDelete = () => {
        deleteTransaction(id)
            .then(() => navigate('/transactions'))
            .catch(error => console.error('Error deleting transaction:', error));
    };

    if (!transaction) return <p>Loading...</p>;

    return (
        <div className="show">
            <h2>{transaction.item_name}</h2>
            <p>Amount: ${transaction.amount}</p>
            <p>Date: {transaction.date}</p>
            <p>From: {transaction.from}</p>
            <p>Category: {transaction.category}</p>
            <button onClick={() => navigate(`/transactions/${id}/edit`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Show;