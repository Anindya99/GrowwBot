import { MicOutlined } from '@material-ui/icons';
import React from 'react';
import MutualFund from './mutualFund';

import '../stocks/StockGroup.css';

const StockGroup = () => {
    return (
        <div className="group__head">
            <h3>Popular Funds</h3>
            <div className="group__body">
                <MutualFund />
                <MutualFund />
                <MutualFund />
                <MutualFund />
            </div>
        </div>
    );
};

export default StockGroup;
