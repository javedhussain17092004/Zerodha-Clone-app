import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='' id='supportWrapper'>
                <h3 className='mt-5'>Support Portal</h3>             
                <a href='#'className='mt-5' style={{color:"white"}}>Track tickets</a>
            </div>
            <div className='row p-5 mb-5 '>
               <div className='col-6 p-5 mb-5 mt-5'>
                <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
                <input placeholder='Eg:how do i activate F&O,why my order getting rejected..'/> <br/>   
                <a href='#'style={{color:"white"}}>Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href='#'style={{color:"white"}}>Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <a href='#'style={{color:"white"}}>Intraday margins</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href='#'style={{color:"white"}}>Kite user manual</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </div>
               <div className='col-6 p-5 mb-5'>
                <h1 className='fs-4 mt-5'>Featured</h1>
                <ol>
                    <li><a href='#' style={{color:"white"}}>Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
                    <li><a href='#'style={{color:"white"}}>Revision in expiry day of Index and Stock derivatives contracts</a></li>
               
                </ol>
               </div>
            </div>
        </section>
    );
}

export default Hero;