import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, Input } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

//import css
import './Header.css';
import { SearchOutlined } from '@material-ui/icons';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <div className="header__one">
                <img
                    className="logo"
                    src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/logo-dark-groww.83f43714.svg"
                    alt=""
                />
                <div className="buttons">
                    <Button
                        className="header_explore"
                        onClick={() => navigate('/stocks/user/explore')}
                    >
                        Explore{' '}
                    </Button>
                    <Button
                        className="header_explore"
                        onClick={() => navigate('/stocks/user/investments')}
                    >
                        Investments
                    </Button>
                </div>
                <div className="header__searchbar">
                    <SearchOutlined className="header_searchicon" />
                    <input
                        className="header__search"
                        placeholder="Search mutual funds and stocks"
                    />
                </div>
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
                    <IconButton>
                        <AccountCircleOutlinedIcon className="actionicons" />
                    </IconButton>
                </div>
            </div>
            <div className="header__two">
                <Button
                    className="header_explore"
                    onClick={() => navigate('/stocks/user/explore')}
                >
                    Stocks{' '}
                </Button>
                <Button
                    className="header_explore"
                    onClick={() => navigate('/mutual-funds/user/explore')}
                >
                    mutual Funds{' '}
                </Button>
                <Button
                    className="header_explore"
                    onClick={() => navigate('/deposits/user/explore')}
                >
                    Fixed Deposits{' '}
                </Button>
            </div>
        </div>
    );
};

export default Header;
