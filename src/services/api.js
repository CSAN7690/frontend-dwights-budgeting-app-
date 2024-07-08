const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://backend-dwights-budgeting-app.onrender.com';

export const getTransactions = async () => {
    const response = await fetch(`${BASE_URL}/transactions`);
    if (!response.ok) {
        throw new Error('Failed to fetch transactions');
    }
    return await response.json();
};

export const getTransaction = async (id) => {
    const response = await fetch(`${BASE_URL}/transactions/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch transaction');
    }
    return await response.json();
};

export const createTransaction = async (transaction) => {
    const response = await fetch(`${BASE_URL}/transactions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
    });
    if (!response.ok) {
        throw new Error('Failed to create transaction');
    }
    return await response.json();
};

export const updateTransaction = async (id, transaction) => {
    const response = await fetch(`${BASE_URL}/transactions/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
    });
    if (!response.ok) {
        throw new Error('Failed to update transaction');
    }
    return await response.json();
};

export const deleteTransaction = async (id) => {
    const response = await fetch(`${BASE_URL}/transactions/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete transaction');
    }
};