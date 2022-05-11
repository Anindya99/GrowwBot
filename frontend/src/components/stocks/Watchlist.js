import React from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

import './Watchlist.css';

const Watchlist = () => {
    return (
        <div className="watchlist">
            <div className="watchlist__item">
                <p>Manish's Watchlist</p>
                <OpenInFullIcon
                    style={{
                        backgroundColor: 'green',
                        margin: '0px 10px',
                        borderRadius: '50px',
                        padding: '5px',
                    }}
                />
            </div>
            <div className="watchlist__item">
                <p>Bank of Baroda</p>
                <p>$256.43</p>
            </div>
            <div className="watchlist__item">
                <p>Bank of Baroda</p>
                <p>$256.43</p>
            </div>
            <div className="watchlist__item">
                <p>Bank of Baroda</p>
                <p>$256.43</p>
            </div>
            <div className="watchlist__item">
                <p>Bank of Baroda</p>
                <p>$256.43</p>
            </div>
            <div className="watchlist__item">
                <p>Bank of Baroda</p>
                <p>$256.43</p>
            </div>
        </div>
    );
};

export default Watchlist;
