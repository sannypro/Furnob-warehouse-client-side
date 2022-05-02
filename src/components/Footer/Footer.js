import React from 'react';
import "./Fotter.css"

const Footer = () => {
    const date = new Date
    return (
        <div className='footer  p-2 Nav-bg mt-5'>
            <div className=''>
                <p className='text-center footer-item mt-4'>Copyright © {date.getFullYear()} Furnob. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer; 