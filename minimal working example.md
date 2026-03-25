This script demonstrates how JavaScript captures an input and updates the UI:
// Function to update balance
function addSalary() {
    const amount = document.getElementById('salaryInput').value;
    const display = document.getElementById('balanceDisplay');
    display.innerText = `Total Balance: $${amount}`;
}
