import React from "react";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { IconButton, Button } from "@material-ui/core";
import "./Stock.css";

const Stock = (props) => {
    localStorage.setItem("route","stocks-user-explore");
    const navigate = useNavigate();
    const redirectToStockPage = () => {
        navigate(`/stocks/${props.id}`);
    };
    return (
        <div className="stock" onClick={redirectToStockPage}>
            <div className="product__head">
                <img
                    className="product__logo"
                    src={
                        props.imageUrl ||
                        "https://assets-netstorage.groww.in/stock-assets/logos/INE481Y01014.png"
                    }
                />
            </div>
            <p className="product__title">{props.title}</p>
            <div className="lower">
                <div className="product__footer">
                    <p>₹{props.price}</p>
                    {/* <p>39.55 (4.54 %)</p> */}
                </div>
            </div>
        </div>
    );
};

export default Stock;
