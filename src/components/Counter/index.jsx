import React from 'react';

import './style.scss';

const Counter = ({counter = 0}) => {
    return (
        <sup className="counter">
            <span>{counter}</span>
        </sup>
    );
}

export default Counter;