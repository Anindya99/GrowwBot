import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, IconButton } from "@material-ui/core";
import { FormLabel } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputUnstyled from "@mui/base/InputUnstyled";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import {  useLocation } from 'react-router-dom';

import "./StockDetails.css";

const StockDetails = () => {
    localStorage.setItem("route","stocks-user-invest");

    const [stock, setStock] = useState({});
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        const apiCall = async () => {
            try {
                const apiData = await fetch(
                    `http://localhost:3000/api/v1/stocks/${id}`
                );
                const stockData = await apiData.json();
                setStock((stock) => stockData);
            } catch (err) {
                setStock(null);
            }
        };
        apiCall();
    }, []);
    if (stock.message) {
        return (
            <div className="product__baap">
                <h1>Not found</h1>
            </div>
        );
    }
    return (
        <div className="product__baap">
            <div className="product__overview">
                <div className="product__header">
                    <img
                        className="product__logo"
                        alt="product-image"
                        src="https://groww.in/images/partners/icici_groww.svg"
                    />
                    <div>
                        <IconButton className="add__sicon">
                            <ShareRoundedIcon
                                style={{ color: "#00d09c", margin: "0px 10px" }}
                                fontSize="large"
                            />
                        </IconButton>
                        <IconButton className="add__iscon">
                            <AddCircleRoundedIcon
                                style={{ color: "#00d09c" }}
                                fontSize="large"
                            />
                        </IconButton>
                    </div>
                </div>
                <p className="product__Title">{stock.name}</p>
                <p className="product__rate">
                    $25553.43 <span>+51.43(2.47%)</span>
                </p>
                <div className="fundamental">
                    <div className="fundamental__box">
                        <div className="fundamental_item">
                            <p className="field">Market Cap</p>
                            <p className="value">${stock.marketCap}Cr</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">P/E Ratio</p>
                            <p className="value">{stock.priceToIncome}</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">P/B Ration</p>
                            <p className="value">{stock.priceToBook}</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">Industry P/E</p>
                            <p className="value">
                                {stock.industryPriceToIncome}
                            </p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">Debt to Equity</p>
                            <p className="value">${stock.debtToEquity}Cr</p>
                        </div>
                    </div>
                    <div className="fundamental__box">
                        <div className="fundamental_item">
                            <p className="field">ROE</p>
                            <p className="value">{stock.ROE}%</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">EPS(TTM)</p>
                            <p className="value">{stock.earningPerShare}</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">Dividend Yield</p>
                            <p className="value">{stock.dividendYield}%</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">Book Value</p>
                            <p className="value">{stock.bookValue}</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">Face value</p>
                            <p className="value">{stock.faceValue}</p>
                        </div>
                    </div>
                </div>
                <div className="product__about">
                    <h3>About Hero MotoCorp</h3>
                    <p>{stock.about}</p>
                    <div style={{ display: "flex", margin: "1rem 0rem" }}>
                        <div className="fundamental__box">
                            <div className="fundamental_item">
                                <p className="field">Parent Organisation</p>
                                <p className="value">
                                    {stock.parentalOrganisation}
                                </p>
                            </div>
                            <div className="fundamental_item">
                                <p className="field">Founded</p>
                                <p className="value">{stock.founded}</p>
                            </div>
                        </div>
                        <div className="fundamental__box">
                            <div className="fundamental_item">
                                <p className="field">Managing Director</p>
                                <p className="value">
                                    {stock.managingDirector}
                                </p>
                            </div>
                            <div className="fundamental_item">
                                <p className="field">NSE Symbol</p>
                                <p className="value">{stock.nseSymbol}</p>
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
                    <Button style={{ marginRight: "1rem" }} size="large">
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
                            style={{ backgroundColor: "rgb(46, 221, 136)" }}
                            fullWidth={true}
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
