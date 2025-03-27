import React from 'react';

const Footer = () => {
    return (
        <div style={{ minHeight: '10vh' }} className="d-flex align-items-center bg-black text-white p-3 opacity-75">
            <div className="container">
                <div className='d-flex justify-content-between align-items-center'>
                    <p>&copy; 2025 DeepnetSoft. All rights reserved.</p>
                    <p>Terms and conditions <span className='ps-2'>Privacy policy</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
