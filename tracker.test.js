const {
Expense,
calculateTotal,
filterExpenses,
addExpense,
removeExpense
} = require("./tracker");

describe("Expense Tracker Tests", () => {


test("adds a new expense", () => {
    const expenses = [];

    const newExpense =
        new Expense("Lunch", 500, "Food");

    const result =
        addExpense(expenses, newExpense);

    expect(result.length).toBe(1);
    expect(result[0].description)
        .toBe("Lunch");
});

test("calculates total expenses", () => {
    const expenses = [
        new Expense("Lunch", 500, "Food"),
        new Expense("Taxi", 300, "Transport")
    ];

    expect(
        calculateTotal(expenses)
    ).toBe(800);
});

test("filters expenses by category", () => {
    const expenses = [
        new Expense("Lunch", 500, "Food"),
        new Expense("Taxi", 300, "Transport"),
        new Expense("Dinner", 700, "Food")
    ];

    const result =
        filterExpenses(expenses, "Food");

    expect(result.length).toBe(2);
});

test("removes an expense", () => {
    const expenses = [
        new Expense("Lunch", 500, "Food"),
        new Expense("Taxi", 300, "Transport")
    ];

    const result =
        removeExpense(expenses, "Lunch");

    expect(result.length).toBe(1);
    expect(result[0].description)
        .toBe("Taxi");
});

});
