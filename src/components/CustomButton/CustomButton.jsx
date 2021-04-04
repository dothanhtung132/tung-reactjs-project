import React from 'react';
import './CustomButton.scss';

const CustomButton = ({children, customClass, ...otherProps}) => {
    return (
        <button className={`${customClass} custom-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;