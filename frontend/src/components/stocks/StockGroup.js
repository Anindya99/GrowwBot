import React from 'react';
import Stock from './Stock';

import './StockGroup.css';

const StockGroup = () => {
    return (
        <div className="group__head">
            <h3>Top Gainers</h3>
            <div className="group__body">
                <Stock />
                <Stock />
                <Stock />
                <Stock />
            </div>
        </div>
    );
};

export default StockGroup;
