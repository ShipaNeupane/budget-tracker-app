import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './DonutChart.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ transactions }) => {
    // Group transactions by category and sum the amounts
    const categoryTotals = transactions.reduce((acc, transaction) => {
        const category = transaction.category || 'Unknown';
        if (!acc[category]) {
        acc[category] = 0;
        }
        acc[category] += parseFloat(transaction.amount);
        return acc;
    }, {});

    // Extract categories and their total amounts spent
    const categories = Object.keys(categoryTotals);
    const amounts = Object.values(categoryTotals);

    // Data for the doughnut chart
    const data = {
        labels: categories,
        datasets: [
        {
            label: 'Amount Spent',
            data: amounts,
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
            '#F7464A',
            '#46BFBD',
            '#FDB45C',
            '#949FB1',
            '#4D5360'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
            '#F7464A',
            '#46BFBD',
            '#FDB45C',
            '#949FB1',
            '#4D5360'
            ]
        }
        ]
    };

    const options = {
        plugins: {
        legend: {
            position: 'bottom',
        }
        }
    };

    return (
        <div className="donut-chart-container">
        <h3>Visual Breakdown</h3>
        <Doughnut data={data} options={options} />
        </div>
    );
};

export default DonutChart;
