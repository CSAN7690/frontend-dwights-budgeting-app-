import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/transactions`)
            .then(response => response.json())
            .then(data => {
                console.log("Transactions fetched:", data);
                setTransactions(data);
            })
            .catch(error => console.error('Error fetching transactions:', error));
    }, []);

    const total = transactions.reduce((sum, transaction) => sum + Number(transaction.amount), 0);
    const totalColor = total > 100 ? 'green' : total >= 0 ? 'yellow' : 'red';

    return (
        <div className="home">
            <h2 className="total-text">
                Bank Account Total:
                <span className="total-amount" style={{ color: totalColor }}> ${total}</span>
            </h2>
            <ul className="transactions-list">
                {transactions.map(transaction => (
                    <li key={transaction.id} className="transaction-item">
                        <span>{transaction.date}</span>
                        <Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link>
                        <span>{transaction.amount}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
