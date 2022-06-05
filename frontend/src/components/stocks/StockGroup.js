import { SportsHockeySharp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Stock from "./Stock";

import "./StockGroup.css";

const StockGroup = () => {
    const [stocks, setStocks] = useState([]);
    useEffect(() => {
        const apiCall = async () => {
            const data = await fetch("/api/v1/stocks");
            const stocksData = await data.json();
            setStocks((prevStocks) => {
                return stocksData.stocks;
            });
        };
        apiCall();
    }, []);
    console.log(stocks);
    /* const fun = () => {
        console.log("sfdsdfsf");
    }; */
    return (
        <div className="group__head">
            <h3>Top Stocks</h3>
            <div className="group__body">
                {stocks.map((stock) => (
                    <Stock
                        key={stock._id}
                        id={stock._id}
                        title={stock.name}
                        price={stock.price}
                        imageUrl={stock.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default StockGroup;
