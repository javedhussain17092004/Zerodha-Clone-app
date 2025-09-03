import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            
            <div className='row p-5 mt-5'>
                <div className='col-8 p-5'>
                    <a href='#' style={{textDecoration:"none"}} className='text-center'><h4>Brocarage calculator</h4></a>
                    <ul className='mt-4'>
                        <li>₹100 per order for futures and options.</li>
                        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                        <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                    </ul>
                
                </div>
                <div className='col-4 p-5'>
                    <a href='#' style={{textDecoration:"none"}}><h4>List of charges</h4></a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;