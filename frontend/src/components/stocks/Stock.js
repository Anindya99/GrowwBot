import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { IconButton, Button } from '@material-ui/core';
import './Stock.css';

const Stock = () => {
    return (
        <div className="stock">
            <div className="product__head">
                <img
                    className="product__logo"
                    src="https://assets-netstorage.groww.in/stock-assets/logos/INE481Y01014.png"
                />
                <IconButton className="add__icon">
                    <AddCircleOutlineIcon
                        style={{ color: '#00d09c' }}
                        fontSize="large"
                    />
                </IconButton>
            </div>
            <p className="product__title">Indusland Bank</p>
            <div className="product__footer">
                <p>$4343.544</p>
                <p>39.55 (4.54 %)</p>
            </div>
        </div>
    );
};

export default Stock;
