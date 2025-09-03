import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(240,240,240)"}}>
        <div className='container px-5 border-top mt-5' >
            <div className='row mt-5'>
                <div className='col ms-5 p-3'>
                    <img src='media/images/logo.svg' alt='' style={{width:"50%"}}/>
                    <p>© 2010 - 2025, Zerodha Broking Ltd.<br/>All rights reserved.</p>
                </div>
                <div className='col'>
                    <p>Company</p>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>About</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Philosophy</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Press & media</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Careers</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Zerodha Cares (CSR)</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Zerodha.tech</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Open source</a><br/>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Contact us</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}> Support portal</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>How to file a complaint?</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Status of your complaints</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Bulletin</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Circular</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Z-Connect blog</a><br/>
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Open demat account</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Minor demat account</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>NRI demat account</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Commodity</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Dematerialisation</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>Fund transfer</a><br/>
                    <a href='/' style={{textDecoration:"none",color:"grey"}}>MTF</a><br/>
                </div>
            </div>
            <div className='mt-5 text-muted p-5'style={{fontSize:"13px"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
            <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;