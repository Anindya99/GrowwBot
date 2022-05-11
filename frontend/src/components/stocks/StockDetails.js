import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { FormLabel } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputUnstyled from '@mui/base/InputUnstyled';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import './StockDetails.css';

const StockDetails = () => {
    return (
        <div className="product__baap">
            <div className="product__overview">
                <div className="product__header">
                    <img
                        class="product__logo"
                        alt="product-image"
                        src="https://groww.in/images/partners/icici_groww.svg"
                    />
                    <div>
                        <IconButton className="add__sicon">
                            <ShareRoundedIcon
                                style={{ color: '#00d09c', margin: '0px 10px' }}
                                fontSize="large"
                            />
                        </IconButton>
                        <IconButton className="add__iscon">
                            <AddCircleRoundedIcon
                                style={{ color: '#00d09c' }}
                                fontSize="large"
                            />
                        </IconButton>
                    </div>
                </div>
                <p className="product__Title">
                    ICICI Prudential Technology Direct Growth Plan
                </p>
                <p className="product__rate">
                    $25553.43 <span>+51.43(2.47%)</span>
                </p>
                <div className="fundamental">
                    <div className="fundamental__box">
                        <div className="fundamental_item">
                            <p className="field">Market Cap</p>
                            <p className="value">$49,986Cr</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">P/E Ratio</p>
                            <p className="value">21.58</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">P/B Ration</p>
                            <p className="value">3.54</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">Industry P/E</p>
                            <p className="value">43.23</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">Debt to Equity</p>
                            <p className="value">$49,986Cr</p>
                        </div>
                    </div>
                    <div className="fundamental__box">
                        <div className="fundamental_item">
                            <p className="field">ROE</p>
                            <p className="value">34.54%</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">EPS(TTM)</p>
                            <p className="value">115.93</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">Dividend Yield</p>
                            <p className="value">4.26%</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">Book Value</p>
                            <p className="value">793.08</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">Face value</p>
                            <p className="value">2</p>
                        </div>
                    </div>
                </div>
                <div className="product__about">
                    <h3>About Hero MotoCorp</h3>
                    <p>
                        Hero MotoCorp Limited, formerly Hero Honda, is an Indian
                        multinational motorcycle and scooter manufacturer
                        headquartered in New Delhi. The company is the largest
                        two-wheeler manufacturer in the world, and also in
                        India, where it has a market share of about 37.1% in the
                        two-wheeler industry.
                    </p>
                    <div style={{ display: 'flex', margin: '1rem 0rem' }}>
                        <div className="fundamental__box">
                            <div className="fundamental_item">
                                <p className="field">Parent Organisation</p>
                                <p className="value">Hero MotoCorp Limited</p>
                            </div>
                            <div className="fundamental_item">
                                <p className="field">Founded</p>
                                <p className="value">1984</p>
                            </div>
                        </div>
                        <div className="fundamental__box">
                            <div className="fundamental_item">
                                <p className="field">Managing Director</p>
                                <p className="value">Mr. Pawan Munjal</p>
                            </div>
                            <div className="fundamental_item">
                                <p className="field">NSE Symbol</p>
                                <p className="value">HEROMOTOCO</p>
                            </div>
                        </div>
                    </div>
                    <div className="product__images">
                        <img
                            alt="stockImage"
                            src="https://assets-netstorage.groww.in/stock-assets/brand_logo/INE158A01026/Hero%20Glamour/1.%20hero-glamour-fi-techno-blue.png"
                        />
                        <img
                            alt="stockImage"
                            src="https://assets-netstorage.groww.in/stock-assets/brand_logo/INE158A01026/Hero%20Glamour/1.%20hero-glamour-fi-techno-blue.png"
                        />
                        <img
                            alt="stockImage"
                            src="https://assets-netstorage.groww.in/stock-assets/brand_logo/INE158A01026/Hero%20Glamour/1.%20hero-glamour-fi-techno-blue.png"
                        />
                        <img
                            alt="stockImage"
                            src="https://assets-netstorage.groww.in/stock-assets/brand_logo/INE158A01026/Hero%20Glamour/1.%20hero-glamour-fi-techno-blue.png"
                        />
                        <img
                            alt="stockImage"
                            src="https://assets-netstorage.groww.in/stock-assets/brand_logo/INE158A01026/Hero%20Glamour/1.%20hero-glamour-fi-techno-blue.png"
                        />
                        <img
                            alt="stockImage"
                            src="https://assets-netstorage.groww.in/stock-assets/brand_logo/INE158A01026/Hero%20Glamour/1.%20hero-glamour-fi-techno-blue.png"
                        />
                        <img
                            alt="stockImage"
                            src="https://assets-netstorage.groww.in/stock-assets/brand_logo/INE158A01026/Hero%20Glamour/1.%20hero-glamour-fi-techno-blue.png"
                        />
                        <img
                            alt="stockImage"
                            src="https://assets-netstorage.groww.in/stock-assets/brand_logo/INE158A01026/Hero%20Glamour/1.%20hero-glamour-fi-techno-blue.png"
                        />
                    </div>
                </div>
            </div>
            <div className="product__form">
                <div className="button__type">
                    <Button style={{ marginRight: '1rem' }} size="large">
                        BUY
                    </Button>
                    <Button size="large">SELL</Button>
                </div>
                <form>
                    <div className="form__controls">
                        <label>Shares NSE</label>
                        <input
                            type="number"
                            min="0"
                            step="1"
                            className="form__input"
                            required
                        />
                    </div>
                    <div className="form__controls">
                        <p>Price Market</p>
                        <p className="p__dark">$2,453,433</p>
                    </div>
                    <div className="form__controls">
                        <Button
                            variant="contained"
                            style={{ backgroundColor: 'rgb(46, 221, 136)' }}
                            fullWidth="yes"
                            size="large"
                        >
                            BUY
                        </Button>
                    </div>
                    <p className="foot">100% SAFE AND SECURE</p>
                </form>
            </div>
        </div>
    );
};

export default StockDetails;
