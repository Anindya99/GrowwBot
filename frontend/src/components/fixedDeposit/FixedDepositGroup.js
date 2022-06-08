import React, { useEffect, useState } from "react";
import FixedDeposit from "./FixedDeposit";
import { Button, IconButton } from "@mui/material";
import { getUser } from "../../api/users.api";
import AuthStore from "../../middleware/authstore";
import { makeInvestment } from "../../api/investment.api";

import Snackbars from "../Snackbars";
import "./FixedDepositGroup.css";

const FixedDepositGroup = () => {
    const [fixedDeposits, setFixedDeposits] = useState([]);
    const [showForm, setForm] = useState(false);
    const [investmentAmount, setInvestmentAmount] = useState(0);
    const [selectedFd, setSelectedFd] = useState({});
    const [snackopen, setsnack] = useState(false);
    const [snackmsg, setsnackmsg] = useState("");
    const [snacktype, setsnacktype] = useState("success");
    const userId = AuthStore.getUserDetail()._id;
    const token = localStorage.jwToken;

    useEffect(() => {
        const apiCall = async () => {
            const data = await fetch("/api/v1/fixed-deposits");
            const fds = await data.json();
            setFixedDeposits(fds.FD);
        };
        apiCall();
    }, []);

    const clickHandler = (fd) => {
        setForm(true);
        setSelectedFd(fd);
    };

    const checkUser = () => {
        if (investmentAmount >= 1000) {
            getUser(token, userId).then((data) => {
                if (data.hasOwnProperty("msg")) {
                    AuthStore.clearJWT();
                    window.location.href = "/";
                } else {
                    if (!data.kyc) {
                        setsnacktype("error");
                        setsnackmsg(
                            "Sorry, you cannot invest in the stock now, as your KYC is incomplete."
                        );
                        setsnack(true);
                    } else {
                        buyFixedDeposit();
                    }
                }
            });
        } else {
            console.log("error");
            setsnacktype("error");
            setsnackmsg(`Sorry, SIP amount must be grater than 1000!!`);
            setsnack(true);
        }
    };

    const buyFixedDeposit = () => {
        //here the type must be equal to the type description in investment model Stock/Mutual-Fund/Fixed-Deposit
        makeInvestment(
            token,
            userId,
            selectedFd._id,
            selectedFd.title,
            "Fixed-Deposit",
            `${selectedFd.roi}% Per Anum`,
            investmentAmount
        ).then((data) => {
            if (data.hasOwnProperty("msg") && data["msg"] === "Success") {
                setInvestmentAmount(0);
                setsnacktype("success");
                setsnackmsg("Your investment is successful.");
                setsnack(true);
            } else {
                setsnacktype("error");
                setsnackmsg("Investment failed.");
                setsnack(true);
            }
            //console.log(data);
        });
    };

    return (
        <div className="fd-group-head fd">
            <div className="fd-group">
                {fixedDeposits.map((fd) => (
                    <FixedDeposit
                        key={fd.title}
                        fd={fd}
                        onClick={[clickHandler, setSelectedFd]}
                    />
                ))}
            </div>
            {!showForm && (
                <div className="select_fd">
                    <p> Select a FD to Invest</p>
                </div>
            )}
            {showForm && (
                <form id="fd_form">
                    <div className="fd__metadata">
                        <h4> {selectedFd.time} Years</h4>
                        <p>{selectedFd.title}</p>
                    </div>
                    <div className="fd__controls">
                        <label>Investment Amount</label>
                        <input
                            type="number"
                            min="1000"
                            step="100"
                            value={investmentAmount}
                            onChange={(e) => {
                                setInvestmentAmount(e.target.value);
                            }}
                            className="form__input"
                            required
                        />
                    </div>
                    <div className="fd__controls">
                        <p>Interst Rate</p>
                        <p>{`${selectedFd.roi}% p.a.`}</p>
                    </div>
                    <div className="fd__controls">
                        <p>Time Period</p>
                        <p>{selectedFd.time * 12} months</p>
                    </div>
                    <div className="fd__controls">
                        <Button
                            variant="contained"
                            style={{ backgroundColor: "rgb(46, 221, 136)" }}
                            fullWidth={true}
                            size="large"
                            onClick={checkUser}
                        >
                            PROCEED
                        </Button>
                    </div>
                    <p className="foot">100% SAFE AND SECURE</p>
                </form>
            )}
            {snackopen && (
                <Snackbars
                    msg={snackmsg}
                    type={snacktype}
                    close={() => {
                        setsnack(false);
                    }}
                />
            )}
        </div>
    );
};

export default FixedDepositGroup;
