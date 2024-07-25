import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <div className='container'>
        <div className='footer-wrapper'>
            <div className='footerlist-item1'>
                <img src='/logo/Foodie (1).png' alt="Logo Image" />
                <p><CallIcon />mmmmmmm</p>
                <p><EmailIcon />mmmmmmm</p>
                <div className='d-flex column-gap-3'>
                    <FacebookOutlinedIcon />
                    <XIcon />
                    <WhatsAppIcon />
                    <InstagramIcon />
                </div>
            </div>
            <div className=''>
                <h3>Company</h3>
                <p>About</p>
                <p>Blog</p>
            </div>
            <div className=''>
                <h3>Services</h3>
                <p>Login</p>
                <p>Terms & Conditions</p>
            </div>
            <div className=''>
                <h3>Customer Care</h3>
                <p>Login</p>
                <p>FAQ</p>
                <p>Contact Us</p>
            </div>
            <div className=''>
                <h3>Newsletter</h3>
                <p>Sunscribe to our Newsletter and receive updates vis email</p>
            </div>
        </div>
    </div>
  )
}
