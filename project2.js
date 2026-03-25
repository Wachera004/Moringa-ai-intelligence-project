// DOM Elements
const balanceEl = document.getElementById('BALANCE');
const moneyPlusEl = document.getElementById('money-plus');
const moneyMinusEl = document.getElementById('money-minus');
const listEl = document.getElementById('list');
const transactionForm = document.getElementById('transaction-form');
const salaryForm = document.getElementById('salary-form');

// State
let transactions = [];

// Utility Functions
function updateUI() {
    const income = transactions
        .filter((item) => item.type === 'income')
        .reduce((acc, item) => acc + item.amount, 0);

    const expense = transactions
        .filter((item) => item.type === 'expense')
        .reduce((acc, item) => acc + item.amount, 0);

    const balance = income - expense;

    balanceEl.textContent = `sh ${balance.toFixed(2)}`;
    moneyPlusEl.textContent = `+sh${income.toFixed(2)}`;
    moneyMinusEl.textContent = `-sh${expense.toFixed(2)}`;

    listEl.innerHTML = '';
    transactions.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add(item.type === 'income' ? 'plus' : 'minus');
        li.innerHTML = `
            ${item.category || 'Salary'} - ${item.date}
            <span>${item.type === 'income' ? '+' : '-'}sh${item.amount.toFixed(2)}</span>
            <button class="delete-btn" onclick="removeTransaction(${item.id})">x</button>
        `;
        listEl.appendChild(li);
    });
}

function addTransaction(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('Amount').value);
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;

    if (isNaN(amount) || amount <= 0 || !date || !category) {
        alert('Please fill in all fields correctly.');
        return;
    }

    const transaction = {
        id: Date.now(),
        type: 'expense',
        amount,
        date,
        category,
    };

    transactions.push(transaction);
    updateUI();
    transactionForm.reset();
}

function addSalary(e) {
    e.preventDefault();

    const salaryAmount = parseFloat(document.getElementById('Salary').value);
    const date = document.getElementById('salary-date').value;

    if (isNaN(salaryAmount) || salaryAmount <= 0 || !date) {
        alert('Please fill in all fields correctly.');
        return;
    }

    const salary = {
        id: Date.now(),
        type: 'income',
        amount: salaryAmount,
        date,
        category: 'Salary',
    };

    transactions.push(salary);
    updateUI();
    salaryForm.reset();
}

function removeTransaction(id) {
    transactions = transactions.filter((item) => item.id !== id);
    updateUI();
}

// Event Listeners
transactionForm.addEventListener('submit', addTransaction);
salaryForm.addEventListener('submit', addSalary);

// Initial UI Update
updateUI();
