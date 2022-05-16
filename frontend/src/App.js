import React, { useState,useEffect } from 'react'
import Header from './components/Header';
import StockPage from './components/stocks/StockPage';
import Watchlist from './components/stocks/Watchlist';
import Footer from './components/footer';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MutualFundGroup from './components/mutualFunds/mutualFundGroups';
import FixedDepositGroup from './components/fixedDeposit/FixedDepositGroup';
import StockDetails from './components/stocks/StockDetails';
import './App.css';
import { Watch } from '@material-ui/icons';
import Cover from './components/cover/cover';
import Getstart from './components/cover/getstart';
import AuthStore from './middleware/authstore'
import Chatbot from './components/chatbot/chatbot';
//import SmartToyIcon from '@mui/icons-material/SmartToy';
import AndroidIcon from '@mui/icons-material/Android';

import ActionProvider from './components/chatbot/ActionProvider';
import MessageParser from './components/chatbot/MessageParser';
import config from './components/chatbot/config';

function App() {
    const loggedin= AuthStore.isAuthenticated()? true:false;
    const [showBot,setshowBot]= useState(false);
    const location = useLocation();
    
    useEffect(()=>{
        setshowBot(false);
        console.log(location.pathname);
        
    },[location])
    
    return (
        <div>
            <Header loggedin={loggedin}/> 
            <div className="content">
                <Routes>
                <Route 
                        path="/"
                        element={
                            loggedin ?
                                <Navigate replace to='/stocks/user/explore'/>
                                :<>
                                    <Getstart />
                                    <Cover />
                                    
                                </>
                        }
                    ></Route>
                    <Route
                        path='/stocks/user/explore'
                        element={
                          loggedin ?
                           <>
                            <StockPage />
                            <Watchlist />
                           </> 
                           : <Navigate replace to='/'/>
                        }
                    />
                    <Route
                        path="/mutual-funds/user/explore"
                        element={
                            loggedin? 
                            <>
                                <MutualFundGroup />
                            </>
                            : <Navigate replace to='/'/> 
                        }
                    />
                    <Route
                        path="/deposits/user/explore"
                        element={
                            loggedin?
                                <>
                                    <FixedDepositGroup />
                                </>  
                                : <Navigate replace to='/'/>   
                        }
                    />
                    <Route path="/stocks/:id" element={<StockDetails />} />
                    <Route path="/mutual-funds/:id" element={<Watchlist />} />
                    <Route path="/deposits/:id" element={<Watchlist />} />
                </Routes>
            </div>
            <div>
                <AndroidIcon className='boticon' 
                onClick={()=>{
                    setshowBot(!showBot);
                }
                }/>
                {showBot && <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />}
            </div>
            <Footer />
        </div>
    );
}

export default App;
