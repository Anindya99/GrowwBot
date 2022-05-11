import React from 'react';
import Box from './Box';

const FixedDeposit = () => {
    return (
        <div className="group__head">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '0.5rem',
                }}
            >
                <img
                    className="product__logo"
                    src="https://assets-netstorage.groww.in/app-assets/others/axisBank.svg"
                />
                <h3>Axis Bank FDs</h3>
            </div>
            <div className="group__body">
                <Box />
                <Box />
                <Box />
            </div>
        </div>
    );
};

export default FixedDeposit;
