import React from 'react';

function RightSection({imageURL,productName, productDescription, learnMore}) {
    return ( 
        <div className='container'>
            <div className='row mt-3 p-5 ms-5'>
                <div className='col-4 mt-5 p-5'>
                    <h1 className='mt-5 pt-5 fs-2'>{productName}</h1>
                    <p className='mt-3'>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-6 ms-5 p-5'>
                    <img src={imageURL} className='mt-0' alt=''/>
                </div>
            </div>

        </div>
     );
}

export default RightSection;