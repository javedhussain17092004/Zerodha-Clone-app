import React from 'react';

function Education() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <img src='media/images/education.svg' alt=''/>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mt-5 fs-6'>
                    <h2>Free and open market education</h2>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the world<br/> covering everything from the basics to advanced trading.</p>
                    <a href='/' style={{textDecoration:"none"}}>Varsity  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in<br/> India for all your market related queries.</p>
                    <a href='/' style={{textDecoration:"none"}}>TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;