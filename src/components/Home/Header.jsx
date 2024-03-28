import React, { Fragment } from 'react'
import '../../assets/css/custom.css'
import '../../assets/css/responsive.css'
import me from '../../assets/img/miltondey1.jpg'
import {Clock} from "@phosphor-icons/react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
// import * as React from 'react';
// import Map from 'react-map-gl';

const Header = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <Fragment>
            <section className="hero-area">
                <div className="custom-container">
                    <div className="custom-row">
                        <div className="hero-img">
                            <img src={me} alt="Hero"/>
                        </div>

                        <div className="hero-content-right">
                            <div className="hero-content-top">
                                <div className="available-link-wrap">
                                    <a href="#" className="available-link common-box">
                                        <span className="online-dot"></span>Available for freelance work
                                    </a>
                                </div>
                                <span className="time common-box">
                                    <i className="ph "><Clock size={15} /></i> <span id="datetime">Monday, 25 March, 2024</span>
                                </span>

                                <a href="contact.html" className="theme-btn common-box">
                                    <span>
                                        <span className="normal">Contact Me <i className="las la-arrow-right"></i></span>
                                        <span className="hover">Contact Me <i className="las la-arrow-right"></i></span>
                                    </span>
                                </a>
                            </div>

                            <div className="hero-content-bottom">
                                <div className="hero-content common-box">
                                    <span>A Software Engineer</span>
                                    <h1>Milton Dey Mishu 👋🏽</h1>
                                    <p>I am a Sylhet, Bangladesh-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience and industries.</p>
                                    {/* <img src="assets/imgs/signeture.svg" alt="Signeture" className="signeture"> */}
                                </div>

                                <div className="hero-map-wrap">
                                    <div className="hero-map-top">
                                        <span className="address common-box">44 Baker Street, SA</span>
                                        <span className="address common-box address-country"><i className="ph-duotone ph-map-pin map-icon"></i> USA</span>
                                    </div>
                                    <div id="hero-map mt-10">
                                        {/* <canvas id="cobe" width="600" height="600"></canvas> */}
                                        <div className="" style={{ height: '100%', width: '100%' }}>
                                        <GoogleMapReact
                                                bootstrapURLKeys={{ key: "" }}
                                                defaultCenter={defaultProps.center}
                                                defaultZoom={defaultProps.zoom}
                                            >
                                                <AnyReactComponent
                                                lat={59.955413}
                                                lng={30.337844}
                                                text="My Marker"
                                                />
                                            </GoogleMapReact>
                                        </div>
                                                                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



    </Fragment>
  )
}

export default Header
