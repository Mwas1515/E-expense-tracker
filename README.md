# E-Expense Tracker

E-Expense Tracker is a modern and responsive expense tracking application that helps users keep track of their spending habits. Users can add, categorize, view, and delete expenses while monitoring their total expenditure in real time. The application leverages JavaScript best practices, including OOP, functional programming, local storage, and automated testing with Jest, making it both a practical financial tool and a demonstration of modern web development skills.


---

## Features

### Expense Management
- Add a new expense with:
  - Description
  - Amount
  - Date
  - Category
- View all recorded expenses.
- Delete expenses from the list.
- Automatically calculate and display the total amount spent.

### Filtering
- Filter expenses by category:
  - Food & Dining
  - Transportation
  - Utilities
  - Entertainment

### Data Persistence
- Uses Local Storage to save expenses.
- Expenses remain available even after refreshing the browser.

### Testing
- Unit tests implemented using Jest.
- Tests cover:
  - Adding expenses
  - Removing expenses
  - Calculating total expenses
  - Filtering expenses by category

---

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript (ES6+)
- Local Storage API
- Jest
- Git & GitHub

---

## Project Structure

```text
E-expense-tracker/
│
├── index.html
├── expense.js
├── tracker.js
├── tracker.test.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## JavaScript Concepts Demonstrated

### Object-Oriented Programming (OOP)

An `Expense` class is used to create expense objects.

```javascript
class Expense {
    constructor(description, amount, date, category) {
        this.description = description;
        this.amount = amount;
        this.date = date;
        this.category = category;
    }
}
```

### Functional Programming

The application uses:

- `filter()`
- `reduce()`
- `forEach()`

Example:

```javascript
const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
);
```

### Destructuring

```javascript
const { description, amount, category } = expense;
```

### Spread Operator

```javascript
expenses = [...expenses, newExpense];
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/Mwas1515/E-expense-tracker.git
```

### Navigate to the Project

```bash
cd E-expense-tracker
```

### Install Dependencies

```bash
npm install
```

---

## Running Tests

Run Jest tests:

```bash
npm test
```

Example output:

```text
PASS ./tracker.test.js

✓ adds a new expense
✓ calculates total expenses
✓ filters expenses by category
✓ removes an expense
```

---

## Deployment

The project can be deployed using GitHub Pages.

### Deploy Steps

1. Push the project to GitHub.
2. Open the repository settings.
3. Navigate to **Pages**.
4. Select the branch to deploy.
5. Save and wait for GitHub Pages to generate the live link.

---

## Screenshots
### Main Interface

![Expense Tracker Screenshot](assets/images/Screenshot%202026-06-15%20045831.png)

---

## Learning Outcomes

This project demonstrates:

- DOM Manipulation
- Event Handling
- Local Storage
- Object-Oriented Programming
- Functional Programming
- Unit Testing with Jest
- Version Control with Git
- GitHub Deployment

---

## Author

**Denis Mwangi**

GitHub: https://github.com/Mwas1515

---

## License

This project is licensed under the MIT License.