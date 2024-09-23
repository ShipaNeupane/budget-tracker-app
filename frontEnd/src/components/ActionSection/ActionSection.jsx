import { useNavigate } from 'react-router-dom';
import './ActionSection.scss';

const ActionSection = () => {
    const navigate = useNavigate();
    
    return (
        <section className="actions">

        <button className="action-button add-income" 
        onClick={() => navigate('/transaction')}> Add Income
        </button>

        <button className="action-button add-expense" 
        onClick={() => navigate('/transaction')}> Add Expense
        </button>

        </section>
    );
};

export default ActionSection;
