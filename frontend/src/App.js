import Header from './components/Header';
import StockPage from './components/stocks/StockPage';
import Watchlist from './components/stocks/Watchlist';
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom';
import MutualFundGroup from './components/mutualFunds/mutualFundGroups';
import FixedDepositGroup from './components/fixedDeposit/FixedDepositGroup';
import StockDetails from './components/stocks/StockDetails';
import './App.css';
import { Watch } from '@material-ui/icons';

function App() {
    return (
        <div>
            <Header />
            <div className="content">
                <Routes>
                    <Route
                        path="/stocks/user/explore"
                        element={
                            <>
                                <StockPage />
                                <Watchlist />
                            </>
                        }
                    ></Route>
                    <Route
                        path="/mutual-funds/user/explore"
                        element={<MutualFundGroup />}
                    />
                    <Route
                        path="/deposits/user/explore"
                        element={<FixedDepositGroup />}
                    />
                    <Route path="/stocks/:id" element={<StockDetails />} />
                    <Route path="/mutual-funds/:id" element={<Watchlist />} />
                    <Route path="/deposits/:id" element={<Watchlist />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
