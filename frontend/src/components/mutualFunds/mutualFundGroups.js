import { MicOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import MutualFund from "./mutualFund";

import "../stocks/StockGroup.css";

const StockGroup = () => {
    const [mfs, setMfs] = useState([]);
    useEffect(() => {
        const apiCall = async () => {
            try {
                const data = await fetch(
                    "/api/v1/mutual-funds"
                );
                const mfData = await data.json();
                setMfs((mfs) => mfData.mfs);
            } catch (e) {}
        };
        apiCall();
    }, []);
    return (
        <div className="group__head">
            <h3>Popular Funds</h3>
            <div className="group__body">
                {mfs.map((mf) => (
                    <MutualFund
                        key={mf._id}
                        id={mf._id}
                        title={mf.title}
                        image={mf.image}
                        roi={mf.roi}
                        time={mf.time}
                    />
                ))}
            </div>
        </div>
    );
};

export default StockGroup;
