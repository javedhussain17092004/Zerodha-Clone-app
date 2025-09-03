import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-8 '>
                    <img src={imageURL} className='ms-5 ps-5' alt=''/>
                </div>
                <div className='col-4 mt-5 ms-0'>
                    <h1>{productName}</h1>
                    <p> {productDescription} </p>
                    <div className='row'>
                        <a href={tryDemo} className=' col-4 mt-5'style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} className=' col-4 mt-5'style={{textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>  
                    </div>
                    <div className='row'>
                        <a href={googlePlay} className='col-4 mt-5' style={{textDecoration:"none"}}><img src='media/images/googlePlayBadge.svg' alt='googleStrore'/></a>
                        <a href={appStore} className=' col-4 mt-5 ' style={{textDecoration:"none"}}><img src='media/images/appstoreBadge.svg' alt='appStore'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;