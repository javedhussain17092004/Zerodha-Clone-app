import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt=''/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in india</h1>
                    <p className='mb-5'>2+ millions zerosha clients conrtribute to over 15% of all volumes in india daily by trading and investment in: </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Futures and Options</p></li>
                                <li><p>Futures and Options</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                             <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Futures and Options</p></li>
                                <li><p>Futures and Options</p></li>
                            </ul>
                        </div>
                        <img src='media/images/pressLogos.png' style={{width:"90%"}} alt='press-image'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;