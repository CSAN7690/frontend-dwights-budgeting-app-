import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTransaction } from '../services/api';
import './New.css';

const New = () => {
    const [transaction, setTransaction] = useState({
        item_name: '',
        amount: 0,
        date: '',
        from: '',
        category: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setTransaction({ ...transaction, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createTransaction(transaction).then(() => navigate('/transactions'));
    };

    return (
        <div className="new">
            <h2>Add a new item</h2>
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
                <button type="submit">Create New Item</button>
            </form>
        </div>
    );
};

export default New;
