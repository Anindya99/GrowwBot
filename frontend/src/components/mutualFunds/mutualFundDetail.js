import React, { useState, useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";

import "./mutualFundDetail.css";
import { useParams } from "react-router-dom";

const MutualFundDetail = () => {
    const [mf, setMf] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const apiCall = async () => {
            try {
                const data = await fetch(
                    `http://localhost:3000/api/v1/mutual-funds/${id}`
                );
                const mfData = await data.json();
                setMf((mf) => mfData.mf);
            } catch (err) {
                setMf((mf) => {});
            }
        };
        apiCall();
    }, [id]);

    if (!mf) {
        return <p>404 Not Found</p>;
    }

    return (
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
            </div>
            <div className="mf__tags">
                {/* {mf && mf.tags.map((tag) => <button>{tag}</button>)} */}
            </div>
            <div className="fundamental">
                <div className="fundamental__box">
                    <div className="fundamental_item">
                        <p className="field">Nav: 20 May 2022</p>
                        <p className="value">${mf.nav}</p>
                    </div>
                    <div className="fundamental_item">
                        <p className="field">Min SIP amount</p>
                        <p className="value">${mf.minSipAmount}</p>
                    </div>
                </div>
                <div className="fundamental__box">
                    <div className="fundamental_item">
                        <p className="field">Ratings</p>
                        <p className="value">{mf.rating}</p>
                    </div>
                    <div className="fundamental_item">
                        <p className="field">Fund Size</p>
                        <p className="value">${mf.fundSize}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MutualFundDetail;
