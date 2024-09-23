import './Balance.scss';

const Balance = ({ transactions }) => {
    const calculateMetrics = () => {
        let balance = 0;
        let incomes = 0;
        let expenses = 0;

        transactions.forEach((transaction) => {
        const amount = parseFloat(transaction.amount);
        if (transaction.type === 'Inflow') {
            incomes += amount;
        } else if (transaction.type === 'Outflow') {
            expenses += amount;
        }
        balance += transaction.type === 'Inflow' ? amount : -amount;
        });

        return { balance, incomes, expenses };
    };

    // Format numbers with commas
    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        });
    };

    const { balance, incomes, expenses } = calculateMetrics();

    const incomePercentage = (balance > 0 && incomes > 0) ? ((incomes / balance) * 100).toFixed(2) : 0;
    const expensePercentage = (incomes > 0 && expenses > 0) ? ((expenses / incomes) * 100).toFixed(2) : 0;

    return (
        <section className="balance">
        <div className="data-item">
            <p>Balance</p>
            <h2>{formatCurrency(balance)}</h2>
        </div>

        <div className="data-item">
            <p>Incomes</p>
            <h2>{formatCurrency(incomes)}</h2>
            <span className='data-item__positive'>+{incomePercentage}%</span>
        </div>

        <div className="data-item">
            <p>Expenses</p>
            <h2>{formatCurrency(expenses)}</h2>
            <span className='data-item__negative'>-{expensePercentage}%</span>
        </div>
        </section>
    );
};

export default Balance;
