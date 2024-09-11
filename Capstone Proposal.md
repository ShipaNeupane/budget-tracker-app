# Project Title - My Budget Tracker

## Overview
What is your app? Give a brief description in a couple of sentences.

    A simple budget tracking app where users can input inflows and outflows, view financial data broken down weekly, monthly, or yearly, and set goals for savings and investment. The app will also feature optional OCR receipt scanning for automatic entry of expense data.

### Problem Space
Why is your app needed? Give any background information around any pain points or other reasons.

    Managing personal finances can be challenging, and many people struggle to track their spending or stick to a budget. This app will provide users with an easy way to track income and expenses, categorize spending, and set financial goals.

### User Profile
Who will use your app? How will they use it? Add any special considerations that your app must take into account.

    - Individuals looking to track their income and expenses
    - People who want to set financial goals for saving or investing
    - Users who prefer a visual representation of their budget breakdown.

### Features
List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

    - Transaction Input: Users can manually input their inflows (income) and outflows (expenses) daily, specifying the amount, date, category (e.g., bills, food, entertainment).
    - Categorization: Users can categorize each transaction into predefined categories like needs (bills, food), wants, savings, and investments.
    - Visual Breakdown: A pie chart or bar chart displays the percentage breakdown of spending in different categories for better financial insights.
    - Financial Goals: Users can set savings and investment goals, for example, saving 10% of their income each month or setting aside a certain amount for investments.
    - Weekly, Monthly, Yearly View: Users can view their spending data filtered by week, month, or year.
    - User Authentication: Users can register, log in, and manage their personal financial data securely.


## Implementation

### Tech Stack
List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

    - Frontend: Flutter or React Native (for mobile), or React.js (for web).
    - Backend: Node.js with Express, or Firebase for cloud services.
    - Database: SQLite (for local storage), or Firebase for real-time database.
    - API: for budget advice 

### APIs
List any external sources of data that will be used in your app.

Alpha Vantage
    - This API provides real-time and historical market data for stocks, forex, and cryptocurrency. It’s useful for giving investment tips based on current market trends.
    - Once a user meets their savings goal, you can suggest stock or market investments to help them invest a portion of their income.
    - Free tier available.
    - Alpha Vantage Documentation available 

### Sitemap
List the pages of your app with brief descriptions. You can show this visually, or write it out.

App Pages:
    - Login Page: Allows users to log in or register a new account.
    - Home Page: Shows the user's total inflows, outflows, and a summary of their budget.
    - Add Transaction Page: Users input income or expenses here, including categories and dates.
    - Breakdown Page: Displays visual charts (pie or bar) showing the breakdown of spending.
    - Goal Setting Page: Users set savings and investment goals and track progress.
    - Profile Page: Allows users to manage their account, change passwords, and view saved data.

### Mockups
Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

### Data
Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out. 

    - User: Stores user login credentials and authentication info.
    - Transaction: Each transaction is linked to a user and contains the amount, date, category, and type (inflow/outflow).
    - Category: Categories for transactions (e.g., Bills, Food, Savings, etc.).
    - Goal: Users can set monthly goals for savings and investment, which will be tracked against their transaction history.

### Endpoints
List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

1. POST /register: Register a new user.
    Parameters: email, password.
    Response: Success or failure message.

2. POST /login: Authenticate the user and return a JWT token.
    Parameters: email, password.
    Response: JWT token.

3. POST /transactions: Add a new transaction (inflow/outflow).
    Parameters: amount, category, date, type (inflow/outflow).
    Response: Transaction object.

4. GET /transactions: Get all transactions for the logged-in user.
    Parameters: JWT token (in headers).
    Response: Array of transactions.

5. POST /goals: Set a monthly savings/investment goal.
    Parameters: savings_goal, investment_goal.
    Response: Goal object.

6. GET /goals: Get the current month's goals for the user.
    Parameters: JWT token (in headers).
    Response: Goal object.

## Roadmap
Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date. 

Sprint Breakdown:
    11 - 12: Set up repository, create basic frontend UI (Login, Register, Home Page).
    13 - 14: Implement backend for user authentication (register/login) and connect it to the database.
    15 - 16: Implement transaction input form, connect it to the backend, and display data on the home page.
    17 - 18: Add categorization and visualization features (charts).
    19 - 20: Implement goal-setting functionality and connect it to the user’s transaction data.
    21 - 22: Polish UI, fix any bugs, and complete final testing.


---

## Future Implementations
Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

    - Receipt Scanning via OCR: If time permits, integrate an API to scan and extract information from receipts.
    - Multi-currency Support: Allow users to track transactions in multiple currencies and convert them automatically.