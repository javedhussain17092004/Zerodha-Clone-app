import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row mt-5 p-5 ms-5'>
                <h1 className=' fs-2 text-center'>People</h1>
            </div>
            <div className='row p-10 fs-6' >
                <div className='col-5 ms-5 p-5 text-center text-muted'style={{lineHeight:1.5, fontSize:"1.1rem"}}>
                    <img src='media/images/nithinKamath.jpg' className='ms-5' style={{width:"65%",borderRadius:"50%"}}/> 
                    <h4 className='mt-5'>Nithin Kamath</h4>
                    <h6 className='mt-4'>Founder, CEO</h6>
                </div>
                <div className='col-6 ms-5 p-5' style={{lineHeight:1.5, fontSize:"1.1rem"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='#' style={{textDecoration:"none"}}>Homepage</a> / <a href='#' style={{textDecoration:"none"}}>TradingQnA</a> / <a href='#' style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;