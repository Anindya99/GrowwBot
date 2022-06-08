import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import StockGroup from "./components/stocks/StockGroup";
import Footer from "./components/footer";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import MutualFundGroup from "./components/mutualFunds/mutualFundGroups";
import FixedDepositGroup from "./components/fixedDeposit/FixedDepositGroup";
import StockDetails from "./components/stocks/StockDetails";
import MutualFundDetail from "./components/mutualFunds/mutualFundDetail";
import OrderTable from "./components/Order";
import "./App.css";
import { Watch } from "@material-ui/icons";
import Cover from "./components/cover/cover";
import Getstart from "./components/cover/getstart";
import AuthStore from "./middleware/authstore";
import Chatbot from "./components/chatbot/chatbot";
//import SmartToyIcon from '@mui/icons-material/SmartToy';
import AndroidIcon from "@mui/icons-material/Android";

import ActionProvider from "./components/chatbot/ActionProvider";
import MessageParser from "./components/chatbot/MessageParser";
import config from "./components/chatbot/config";
import { verify } from "./api/verify.api";

import { GoogleOAuthProvider } from "@react-oauth/google";



function App() {
  const [loggedin, setLoggedin] = useState(
    AuthStore.isAuthenticated() ? true : false
  );
  //console.log(AuthStore.isAuthenticated())
  const [showBot, setshowBot] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setshowBot(false);

    //console.log(location.pathname);
    if (localStorage.getItem("jwToken")) {
      verify(localStorage.getItem("jwToken")).then((res) => {
        //if(!res.ok) {AuthStore.clearJWT();setLoggedin( false);}
        //console.log(res);
        if (res.msg === "verified") setLoggedin(true);
        else {
          AuthStore.clearJWT();
          window.location.href = "/";
        }
      });
    } else setLoggedin(false);
  }, [location]);
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENTID}>
      <div>
        <Header loggedin={loggedin} />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                loggedin ? (
                  <Navigate replace to="/stocks/user/explore" />
                ) : (
                  <>
                    <Getstart />
                    <Cover />
                  </>
                )
              }
            ></Route>
            <Route
              path="/stocks/user/explore"
              element={
                loggedin ? (
                  <>
                    <StockGroup />
                  </>
                ) : (
                  <Navigate replace to="/" />
                )
              }
            />
            <Route
              path="/mutual-funds/user/explore"
              element={
                loggedin ? (
                  <>
                    <MutualFundGroup />
                  </>
                ) : (
                  <Navigate replace to="/" />
                )
              }
            />
            <Route
              path="/deposits/user/explore"
              element={
                loggedin ? (
                  <>
                    <FixedDepositGroup />
                  </>
                ) : (
                  <Navigate replace to="/" />
                )
              }
            />
            <Route
              path="/user/investments"
              element={
                loggedin ? (
                  <>
                    <OrderTable />
                  </>
                ) : (
                  <Navigate replace to="/" />
                )
              }
            />
            <Route
              path="/stocks/:id"
              element={
                loggedin ? (
                  <>
                    <StockDetails />
                  </>
                ) : (
                  <Navigate replace to="/" />
                )
              }
            />
            <Route path="/mutual-funds/:id" element={<MutualFundDetail />} />
            <Route path="/mutual-funds/:id" element={<MutualFundDetail />} />
            <Route path="/deposits/:id" element={<StockDetails />} />
          </Routes>
        </div>
        <div>
          <AndroidIcon
            className="boticon"
            onClick={() => {
              setshowBot(!showBot);
            }}
          />
          {showBot && (
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          )}
        </div>
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
