import React from 'react';

function Pricing() {
    return ( 
        <div className='container m-10 p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h2>Unbeatable pricing</h2>
                    <p className='mt-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/' style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                {/* <div className='col-2'></div> */}
                <div className='col-6'>
                    <div className='row mt-5'>
                        <div className='col text-center p-4 border' >
                            <h1> &#8377;0</h1>
                            <p>Free equity delivery and<br/> direct mutual funds</p>
                        </div>
                        <div className='col text-center p-4 border' >
                            <h1> &#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;