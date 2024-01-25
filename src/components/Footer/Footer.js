import React from 'react';
import footerLogo from '../../images/footer-logo.png';
import '../Footer/Footer.css'


const Footer = () => {
    return (
        <div id='footer'>
            <div className='container'>
                <div className='footer'>
                    <div className='footer-icons'>
                        <img src={footerLogo} alt='' />
                        <p>Contrary to popular  is not simply random text. It has </p>
                        <div className='special-networks'>
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-instagram"></ion-icon>
                            <ion-icon name="logo-twitter"></ion-icon>
                            <ion-icon name="logo-youtube"></ion-icon>
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </div>
                    </div>
                    <div className='footer-about'>
                        <h1>About</h1>
                        <h2>Company</h2>
                        <h2>Team</h2>
                        <h2>Career</h2>
                        <h2>Blogs</h2>
                    </div>
                    <div className='footer-products'>
                        <h1>Products</h1>
                        <h2>E-Books</h2>
                        <h2>Preasantation</h2>
                        <h2>Management</h2>
                        <h2>Dashboard</h2>
                    </div>
                    <div className='footer-address'>
                        <h1>Address</h1>
                        <h2>Country Delevery</h2>
                        <h2>Counter Beach Post</h2>
                        <h2>www.itobd.com</h2>
                        <h2>+880176565655</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;