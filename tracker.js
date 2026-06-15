class Expense {
    constructor(description, amount, category) {
        this.description = description;
        this.amount = Number(amount);
        this.category = category;
    }
}

function calculateTotal(expenses) {
    return expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    );
}

function filterExpenses(expenses, category) {
    return expenses.filter(
        expense => expense.category === category
    );
}

function addExpense(expenses, expense) {
    return [...expenses, expense];
}

function removeExpense(expenses, description) {
    return expenses.filter(
        expense => expense.description !== description
    );
}

module.exports = {
    Expense,
    calculateTotal,
    filterExpenses,
    addExpense,
    removeExpense
};
