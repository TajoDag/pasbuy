import React from 'react';
import { useLocation } from 'react-router-dom';

const ProgressBar = () => {
    const location = useLocation();
    const steps = [
        { path: '/cart', label: '1. My Cart', icon: 'path/to/cart-icon.png' },
        { path: '/shipping', label: '2. Shipping Info', icon: 'path/to/shipping-icon.png' },
        { path: '/delivery', label: '3. Delivery Info', icon: 'path/to/delivery-icon.png' },
        { path: '/payment', label: '4. Payment', icon: 'path/to/payment-icon.png' },
        { path: '/confirmation', label: '5. Confirmation', icon: 'path/to/confirmation-icon.png' }
    ];

    const getStepClass = (step) => {
        const index = steps.findIndex(s => s.path === step.path);
        const currentIndex = steps.findIndex(s => s.path === location.pathname);
        if (index < currentIndex) return 'completed';
        if (index === currentIndex) return 'active';
        return '';
    };

    return (
        <div className="progress-container">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div className={`progress-step ${getStepClass(step)}`}>
                        <div className="step-icon">
                            <img src={step.icon} alt={step.label} />
                        </div>
                        <p className="step-text">{step.label}</p>
                    </div>
                    {index < steps.length - 1 && <div className="progress-separator"></div>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default ProgressBar;
