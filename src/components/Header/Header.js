import React from 'react';
import headerLogo from '../../images/header-logo.png';
import '../Header/Header.css';

const Header = () => {
    return (
        <div id='header'>
            <div class='container'>
                <div className='header'>
                    <div className='header-logo'>
                        <img src={headerLogo} alt='logo'/>
                    </div>
                    <div className='header-links'>
                        <a href='#'>Home</a>
                        <a href='#'>Properties </a>
                        <a href='#'>About us</a>
                        <a href='#'>Blog</a>
                    </div>
                    <div className='header-button'>
                        <button>Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

