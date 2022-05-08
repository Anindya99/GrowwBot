import React from 'react';
import './Box.css';

const Box = ({ rate, time }) => {
    if (!rate) rate = 3.43;
    if (!time) time = '1 year';
    return (
        <div className="box__head">
            <div className="rate">
                <h2>{`${rate}%`}</h2>
            </div>
            <div>
                <p>{`${time}`}</p>
            </div>
        </div>
    );
};

export default Box;
