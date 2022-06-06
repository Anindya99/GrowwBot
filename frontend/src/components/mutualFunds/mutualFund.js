import React from "react";
import { useNavigate } from "react-router-dom";
import "./mutualFund.css";

const MutualFund = (props) => {
    localStorage.setItem("route","mutual-funds-user-explore");
    const navigate = useNavigate();
    const refToMfDetail = () => {
        navigate(`/mutual-funds/${props.id}`);
    };
    //console.log(props)
    return (
        <div className="mutualFund" onClick={refToMfDetail}>
            <div className="product__head">
                <img
                    className="product__logo"
                    src={
                        props.image ||
                        "https://groww.in/images/partners/icici_groww.svg"
                    }
                />
            </div>
            <p className="product__title">{props.title}</p>
            {/* <p className="mutualFund__type product__title">
                Fund Direct Growth
            </p> */}
            <div className="product__footer">
                <p>{props.roi}% ({props.time}Y)</p>
            </div>
        </div>
    );
};

export default MutualFund;
