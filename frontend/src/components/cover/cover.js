import React from 'react'
import './cover.css'

const Cover = () => {
  
  return (
    <div className='rightcover'>
          <div className="stock-cover">
            <div className="product__head">
                      <img
                          className="product__logo"
                          src="icons/stocks.svg"
                          alt="stocks"
                      />
                  </div>
                  <p className="product__title-cover">Stocks</p>
          </div>
          <div className="stock-cover">
            <div className="product__head">
                      <img
                          className="product__logo"
                          src="icons/mutual.svg"
                          alt="mutual-funds"
                      />
                  </div>
                  <p className="product__title-cover">Mutual Funds</p>
          </div>
          <div className="stock-cover">
            <div className="product__head">
                      <img
                          className="product__logo"
                          src="icons/fixed.svg"
                          alt="fixed-deposits"
                      />
                  </div>
                  <p className="product__title-cover">Fixed Deposits</p>
          </div>

          
    </div>
  )
}

export default Cover;