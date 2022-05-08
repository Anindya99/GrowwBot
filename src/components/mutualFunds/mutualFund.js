import React from 'react';
import './mutualFund.css';

const mutualFund = () => {
    return (
        <div className="mutualFund">
            <div className="product__head">
                <img
                    class="product__logo"
                    src="https://groww.in/images/partners/icici_groww.svg"
                />
            </div>
            <p className="product__title">Axis Small Cap</p>
            <p className="mutualFund__type product__title">
                Fund Direct Growth
            </p>
            <div className="product__footer">
                <p>34.6% (3Y)</p>
            </div>
        </div>
    );
};

export default mutualFund;
