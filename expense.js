class Expense {
    constructor(description, amount, date, category) {
        this.id = Date.now();
        this.description = description;
        this.amount = Number(amount);
        this.date = date;
        this.category = category;
    }
}

let expenses = [];

const form = document.getElementById("expenseForm");
const expenseContainer = document.getElementById("expenseContainer");
const expenseList = document.getElementById("expenseList");
const totalElement = document.getElementById("total");

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function loadExpenses() {
    expenses =
        JSON.parse(localStorage.getItem("expenses")) || [];

    if (expenses.length > 0) {
        expenseContainer.classList.remove("hidden");
    }

    displayExpenses();
}

function calculateTotal() {
    const total = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    totalElement.textContent = `Total: KES ${total}`;
}

function removeExpense(id) {
    expenses = expenses.filter(
        expense => expense.id !== id
    );

    saveExpenses();
    displayExpenses();

    if (expenses.length === 0) {
        expenseContainer.classList.add("hidden");
    }
}

window.removeExpense = removeExpense;

function displayExpenses() {
    expenseList.innerHTML = "";

    expenses.forEach(expense => {
        const li = document.createElement("li");

        li.className =
            "bg-slate-700 p-4 rounded-lg border border-slate-600 text-white";

        li.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <h3 class="font-bold">${expense.description}</h3>
                    <p class="text-sm text-slate-300">
                        ${expense.category} • ${expense.date}
                    </p>
                </div>

                <div class="flex items-center gap-4">
                    <span class="text-emerald-400 font-bold">
                        KES ${expense.amount}
                    </span>

                    <button
                        onclick="removeExpense(${expense.id})"
                        class="bg-red-500 px-3 py-1 rounded"
                    >
                        Delete
                    </button>
                </div>
            </div>
        `;

        expenseList.appendChild(li);
    });

    calculateTotal();
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const description =
        document.getElementById("description").value;

    const amount =
        document.getElementById("amount").value;

    const date =
        document.getElementById("date").value;

    const category =
        document.getElementById("category").value;

    if (!description || !amount || !date) {
        alert("Please fill all fields");
        return;
    }

    const expense = new Expense(
        description,
        amount,
        date,
        category
    );

    expenses.push(expense);

    expenseContainer.classList.remove("hidden");

    saveExpenses();
    displayExpenses();

    form.reset();
});

window.addEventListener("DOMContentLoaded", loadExpenses);