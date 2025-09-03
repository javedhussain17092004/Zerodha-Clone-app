import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 ms-5'>
                <h1 className=' fs-2 text-center'>We pioneered the discount broking model in India.<br/>Now, we are breaking ground with our technology.</h1>
            </div>
            <hr/>
            <div className='row mt-5 p-10 fs-6' >
                <div className='col-5 ms-5 p-5'style={{lineHeight:1.5, fontSize:"1.1rem"}}>
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p><br/>
                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p><br/>
                    <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className='col-5 ms-5 p-5' style={{lineHeight:1.5, fontSize:"1.1rem"}}>
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p><a href='#' style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href='#'style={{textDecoration:"none"}}>blog</a> or see what the media is <a href='#'style={{textDecoration:"none"}}>saying about us</a> or learn more about our business and product <a href='#' style={{textDecoration:"none"}}>philosophies</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;