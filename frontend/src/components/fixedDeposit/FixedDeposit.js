import React, { useState } from "react";
import "./FixedDeposit.css";

const FixedDeposit = (props) => {
    localStorage.setItem("route", "deposits-user-explore");
    const fd = props.fd;
    const clickHandler = () => {
        props.onClick[0](fd);
    };
    return (
        <div className="fd_box" onClick={clickHandler}>
            <div className="fd_title_logo">
                <img
                    className="product__logo"
                    src={
                        fd.image ||
                        "https://assets-netstorage.groww.in/app-assets/others/axisBank.svg"
                    }
                />
                <p>{`${fd.title} FDs`}</p>
            </div>
            <div className="fd_body">
                <h2>{`${fd.roi}%`}</h2>
                <span></span>
                <p>{`${fd.time} Years`}</p>
            </div>
        </div>
    );
};

export default FixedDeposit;
