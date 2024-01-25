import React from 'react';
import '../Main/Main.css'
import mainRight from "../../images/main-right.png";

const Main = () => {
    return (
        <div id='main'>
            <div className='container'>
                <div className='main'>
                    <div className='main-left'>
                        <h1>Find the perfect place to stay with your family</h1>
                        <p>Buying a home is a life-changing experience, so shouldn’t your real estate agent be a life changer.</p>
                        <div className='market'>
                            <div className='buy'>
                                <h2>Buy</h2>
                            </div>
                            <div className='rent'>
                                <h2>Rent</h2>
                            </div>
                            <div className='sell'>
                                <h2>Sell</h2>
                            </div>
                        </div>
                        <div className='market-menu'>
                            <div className='location'>
                                <select>
                                    <option>location</option>
                                    <option>location</option>
                                </select>
                                <h2>Dhaka</h2>
                            </div>
                            <div className='vertival-line'></div>
                            <div className='property'>
                                <select>
                                    <option>Property type</option>
                                    <option>Property type</option>
                                </select>
                                <h2>Duplex</h2>
                            </div>
                            <div className='vertival-line'></div>
                            <div className='price'>
                                <select>
                                    <option>Price</option>
                                    <option>Price</option>
                                </select>
                                <h2>$4000-$8000</h2>
                            </div>
                            <div className='search'>

                                
                                <button><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M5.73047 10.7532C8.34303 10.7532 10.4609 8.5699 10.4609 5.87662C10.4609 3.18334 8.34303 1 5.73047 1C3.1179 1 1 3.18334 1 5.87662C1 8.5699 3.1179 10.7532 5.73047 10.7532Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13.0367 13.2581L8.89764 9.60059" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> Search</button>
                            </div>
                        
                        </div>
                    </div>
                    <div className='main-right'>
                        <img src={mainRight} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;