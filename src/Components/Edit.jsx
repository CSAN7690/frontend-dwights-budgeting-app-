import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTransaction, updateTransaction } from '../services/api';
import './Edit.css';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState({
        item_name: '',
        amount: 0,
        date: '',
        from: '',
        category: ''
    });

    useEffect(() => {
        getTransaction(id).then(data => setTransaction(data));
    }, [id]);

    const handleChange = (e) => {
        setTransaction({ ...transaction, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTransaction(id, transaction).then(() => navigate(`/transactions/${id}`));
    };

    return (
        <div className="edit">
            <h2>Edit item</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Date</span>
                    <input
                        type="date"
                        name="date"
                        value={transaction.date}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <span>Name</span>
                    <input
                        type="text"
                        name="item_name"
                        value={transaction.item_name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <span>Amount</span>
                    <input
                        type="number"
                        name="amount"
                        value={transaction.amount}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <span>From</span>
                    <input
                        type="text"
                        name="from"
                        value={transaction.from}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Update Item</button>
            </form>
        </div>
    );
};

export default Edit;
