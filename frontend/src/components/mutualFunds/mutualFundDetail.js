import React, { useState, useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { getUser } from "../../api/users.api";
import AuthStore from "./../../middleware/authstore";
import Snackbars from "../Snackbars";
import { makeInvestment } from "../../api/investment.api";
import "./mutualFundDetail.css";
import { useParams } from "react-router-dom";

const MutualFundDetail = () => {
    const [mf, setMf] = useState({});
    const [sip, setSip] = useState(0);
    const [snackopen, setsnack] = useState(false);
    const [snackmsg, setsnackmsg] = useState("");
    const [snacktype, setsnacktype] = useState("success");
    localStorage.setItem("route", "mutual-funds-user-invest");
    const { id } = useParams();
    const userId = AuthStore.getUserDetail()._id;
    const token = localStorage.jwToken;
    localStorage.setItem("productID", id);
    localStorage.setItem("productType", "mutual-funds");
    useEffect(() => {
        const apiCall = async () => {
            try {
                const data = await fetch(`/api/v1/mutual-funds/${id}`);
                const mfData = await data.json();
                setMf((mf) => mfData);
                //setSip(mfData.minSipAmount);
            } catch (err) {
                setMf((mf) => {});
            }
        };
        apiCall();
    }, [id]);

    const checkUser = () => {
        if (sip >= mf.minSipAmount) {
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
                    } else buyMutualFund();
                }
            });
        } else {
            console.log("error");
            setsnacktype("error");
            setsnackmsg(
                `Sorry, SIP amount must be grater than ${mf.minSipAmount}!!`
            );
            setsnack(true);
        }
    };

    const buyMutualFund = () => {
        //here the type must be equal to the type description in investment model Stock/Mutual-Fund/Fixed-Deposit
        makeInvestment(
            token,
            userId,
            id,
            mf.title,
            "Mutual-Fund",
            `₹${sip}/month at ${mf.roi}% (${mf.time}Y)`,
            sip
        ).then((data) => {
            if (data.hasOwnProperty("msg") && data["msg"] === "Success") {
                setSip(0);
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

    if (!mf) {
        return <p>404 Not Found</p>;
    }

    return (
        <div className="wrapper" style={{ width: "100%", minHeight: "100vh" }}>
            <div className="mutual_fund">
                <div className="product__header">
                    <img
                        className="product__logo"
                        alt="product-image"
                        src={
                            mf.image ||
                            "https://groww.in/images/partners/icici_groww.svg"
                        }
                    />
                    <div>
                        <IconButton className="add__sicon">
                            <BookmarkAddOutlinedIcon
                                style={{ margin: "0px 10px" }}
                                fontSize="large"
                            />
                        </IconButton>
                        <IconButton className="add__iscon">
                            <ShareIcon fontSize="large" />
                        </IconButton>
                    </div>
                </div>
                <div className="mf__title">
                    <h2>{mf.title}</h2>
                    <p className="mf__rate">
                        {mf.roi}% ({mf.time}Y)
                    </p>
                </div>
                <div className="mf__tags">
                    {/* {mf && mf.tags.map((tag) => <button>{tag}</button>)} */}
                </div>
                <div className="fundamental">
                    <div className="fundamental__box">
                        <div className="fundamental_item">
                            <p className="field">Nav: 20 May 2022</p>
                            <p className="value">₹{mf.nav}</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">Min SIP amount</p>
                            <p className="value">₹{mf.minSipAmount}</p>
                        </div>
                    </div>
                    <div className="fundamental__box">
                        <div className="fundamental_item">
                            <p className="field">Ratings</p>
                            <p className="value">{mf.rating}</p>
                        </div>
                        <div className="fundamental_item">
                            <p className="field">Fund Size</p>
                            <p className="value">₹{mf.fundSize}Cr</p>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="form__controls">
                        <label>SIP Amount</label>
                        <input
                            type="number"
                            min={mf.minSipAmount}
                            step="100"
                            value={sip}
                            onChange={(e) => {
                                setSip(e.target.value);
                            }}
                            className="form__input"
                            required
                        />
                    </div>
                    <div className="form__controls">
                        <Button
                            variant="contained"
                            style={{ backgroundColor: "rgb(46, 221, 136)" }}
                            fullWidth={true}
                            size="large"
                            onClick={checkUser}
                        >
                            BUY
                        </Button>
                    </div>
                    <p className="foot">100% SAFE AND SECURE</p>
                </form>
            </div>
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

export default MutualFundDetail;
