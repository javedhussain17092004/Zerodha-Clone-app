import React from 'react';

function Stats() {
    return ( 
        <div className='container mx-10 p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1>Trust with confidence</h1>
                    <h4 className='mt-5'>Customer-first always</h4>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6<br/>
                     lakh crores of equity investments and contribute to 15%<br/>
                      of daily retail exchange volumes in India.</p>
                    <h4 className='mt-5'>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push<br/>
                     notifications. High quality apps that you use at your<br/>
                      pace, the way you like.<a href='/' style={{textDecoration:"none"}}> Our philosophies</a>.</p>
                    <h4 className='mt-5'>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments<br/>
                     in 30+ fintech startups offer you tailored services<br/>
                      specific to your needs.</p>
                    <h4 className='mt-5'>Do better with money</h4>
                    <p className='text-muted'>With initiatives like <a href='/' style={{textDecoration:"none"}}>Nudge</a> and <a href='/' style={{textDecoration:"none"}}>Kill Switch</a>, we don't just<br/>
                     facilitate transactions, but actively help you do better<br/>
                      with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' style={{width:"38rem"}} alt='ecosystem'/>
                    <div className='text-center'>
                        <a href='/' style={{textDecoration:"none"}} className='me-5'>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='/' style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;