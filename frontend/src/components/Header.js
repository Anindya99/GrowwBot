import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "./cover/loginmodal";
import { Button, IconButton } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AuthStore from "../middleware/authstore";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
//import css
import "./Header.css";
import { SearchOutlined } from "@material-ui/icons";

const Header = ({ loggedin }) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const logout = async () => {
        AuthStore.clearJWT();
        window.location.href = "/";
    };
    let user = null;
    if (loggedin) user = AuthStore.getUserDetail();
    

    return (
        <div className="header">
            <div className="header__one">
                <img
                    className="logo"
                    src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/logo-dark-groww.83f43714.svg"
                    alt=""
                />
                {loggedin && (
                    <div className="buttons">
                        <Button
                            className="header_explore"
                            onClick={() => navigate("/stocks/user/explore")}
                        >
                            Explore{" "}
                        </Button>
                        <Button
                            className="header_explore"
                            onClick={() => navigate("/stocks/user/investments")}
                        >
                            Investments
                        </Button>
                    </div>
                )}
                <div className="header__searchbar">
                    <SearchOutlined className="header_searchicon" />
                    <input
                        className="header__search"
                        placeholder="Search mutual funds and stocks"
                    />
                </div>

                {!loggedin && (
                    <Button
                        variant="contained"
                        className="login"
                        onClick={() => setShowModal(true)}
                    >
                        Login/Register
                    </Button>
                )}
                {!loggedin && showModal && (
                    <LoginModal close={() => setShowModal(false)} />
                )}

                {loggedin && (
                    <div className="buttons">
                        <IconButton>
                            <NotificationsNoneIcon className="actionicons" />
                        </IconButton>
                        <IconButton>
                            <AccountBalanceWalletOutlinedIcon className="actionicons" />
                        </IconButton>
                        <IconButton>
                            <ShoppingCartOutlinedIcon className="actionicons" />
                        </IconButton>
                        {user && !user.picture && (
                            <IconButton onClick={logout}>
                                <AccountCircleOutlinedIcon className="actionicons" />
                            </IconButton>
                        )}
                        {user && user.picture && (
                            <img
                                onClick={logout}
                                className="user_image"
                                src={user.picture}
                                alt="user"
                            />
                        )}
                    </div>
                )}
            </div>
            {loggedin && (
                <div className="header__two">
                    <Button
                        className="header_explore"
                        onClick={() => navigate("/stocks/user/explore")}
                    >
                        Stocks{" "}
                    </Button>
                    <Button
                        className="header_explore"
                        onClick={() => navigate("/mutual-funds/user/explore")}
                    >
                        mutual Funds{" "}
                    </Button>
                    <Button
                        className="header_explore"
                        onClick={() => navigate("/deposits/user/explore")}
                    >
                        Fixed Deposits{" "}
                    </Button>
                </div>
            )}
            
        </div>
    );
};
Header.defaultProps = {
    loggedin: true,
};
export default Header;
