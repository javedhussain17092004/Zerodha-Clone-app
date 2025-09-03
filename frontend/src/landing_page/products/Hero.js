import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='row text-center mt-5 p-5 '>
                    <h1 style={{fontSize:"3rem"}}>Zerodha Products</h1>
                    <h5 className='text-muted mt-3'>Sleek, modern, and intuitive trading platforms</h5>
                    <p className='mt-4'>Check out our <a href='#'style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
                </div>
            </div>
        </div>
    );
}

export default Hero;