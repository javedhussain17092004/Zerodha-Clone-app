import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-bottom text-center'>
               <h1>Charges</h1>
               <h3 className='text-muted fs-5 mt-3'>List of all charges and taxes</h3>
            </div>
            <div className='row p-5 mt-5 text-center'>
                <div className='col-4 p-5'>
                    <img src='media/images/pricing0.svg'/>
                    <h3>Free equity delivery</h3>
                    <p className='mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/intradayTrades.svg'/>
                    <h3>Intraday and F&O trades</h3>
                    <p className='mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/pricing0.svg'/>
                    <h3>Free direct MF</h3>
                    <p className='mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 '>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='btn btn-primary p-2 button' style={{width:"15%",margin:"0 auto"  }}>Sign up for free</button>
            </div>
        </div>
        </div>
     );
}

export default Hero;