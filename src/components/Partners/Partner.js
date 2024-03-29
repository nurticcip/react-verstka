import React from 'react';
import '../Partners/Partner.css'
import biotech from "../../images/biotech.png"
import express from "../../images/express.png";
import smileHome from "../../images/smile-home.png";
import connect from "../../images/connect.png";
import homeBuild from "../../images/home-build.png";

const Partner = () => {
    return (
        <div id='partner'>
            <div class="container">
                <div class="partner">
                    <center><h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="52" viewBox="0 0 41 52" fill="none">
                        <g opacity="0.1">
                            <path d="M9.90845 51.9447H13.7598C14.2614 51.9447 14.6555 51.5505 14.6555 51.049V42.2893C14.6555 39.0111 17.3067 36.3599 20.5848 36.3599C22.1612 36.3599 23.6481 36.9869 24.7766 38.0975C25.8873 39.226 26.5142 40.7129 26.5142 42.2893V51.049C26.5142 51.5505 26.9083 51.9447 27.4099 51.9447H31.2613C36.5279 51.9447 40.827 47.6454 40.827 42.3788V18.3927C40.827 18.142 40.7196 17.8911 40.5405 17.7299L21.1939 0.228455C20.8536 -0.0761517 20.3162 -0.0761517 19.9758 0.228455L0.629163 17.7299C0.450067 17.8911 0.34259 18.1419 0.34259 18.3927V42.3788C0.34259 47.6454 4.64187 51.9447 9.90845 51.9447Z" fill="#FE753F"/>
                            <rect x="11.6517" y="28.6248" width="20.0853" height="23.3751" fill="#FE753F"/>
                        </g>
                        </svg>
                        Our Partners</h1></center>
                    <div className='partner-images'>
                        <img src={biotech} />
                        <img src={express} />
                        <img src={smileHome} />
                        <img src={connect} />
                        <img src={homeBuild} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;