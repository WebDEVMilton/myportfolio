import React, { Fragment,useRef } from 'react'
import '../../assets/css/custom.css'
import '../../assets/css/responsive.css'
import { MapPin,House,SquaresFour,Fingerprint,Camera,Paperclip,Swatches,DribbbleLogo,TwitterLogo,InstagramLogo,YoutubeLogo} from "@phosphor-icons/react";
import me from '../../assets/img/miltondey.png'

const Sidebar = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    
        <Fragment>
            <div className="sticky-sidebar">
                <div className="sticky-sidebar-inner">
                    <div className="sidebar-top" ref={navRef}>
                        <div className="sidebar-logo">
                            <div className="left">
                                <a href="index.html" className="logo-img">
                                    {/* <img src={me} alt="Logo"/> */}
                                    <h4 className='text-bold'>M</h4>
                                </a>
                                <a href="index.html" className="logo-text">Milton</a>
                            </div>
                            <div className="right">
                                <span id="current-time"></span>
                                <i className="las la-ellipsis-v"></i>
                            </div>
                        </div>
                        <div className="sidebar-me">
                            <div className="sidebar-me-inner">
                                <div className="img-box">
                                    <img src={me} alt="Me"/>
                                </div>
                                <div className="content">
                                    <h3>Milton Dey Mishu</h3>
                                    <p>Software Engineer</p>
                                    <span className="location"><MapPin size={32} /> Sylhet, Bangladesh</span>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-menu">
                            <nav className="menu-lists">
                                <ul>
                                    <li className="active-menu">
                                        <a href="index.html"><span className="icon"><House size={32} /></span> <span className="title">Home</span></a>
                                    </li>
                                    <li>
                                        <a href="projects.html"><span className="icon"><SquaresFour size={32} /></span> <span className="title">Projects</span></a>
                                    </li>
                                    <li>
                                        <a href="about.html"><span className="icon"><Fingerprint size={32} /></span> <span className="title">About</span></a>
                                    </li>
                                    <li>
                                        <a href="gallery.html"><span className="icon"><Camera size={32} /></span> <span className="title">Gallery</span></a>
                                    </li>
                                    <li>
                                        <a href="contact.html"><span className="icon"><Paperclip size={32} /></span> <span className="title">Contact</span></a>
                                    </li>
                                    <li>
                                        <a href="blog.html"><span className="icon"><Swatches size={32} /></span> <span className="title">Blog</span></a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="responsive-mode sidebar-bottom">
                                <div className="social-link-wrap">
                                    <ul className="social-links">
                                        <li><a href="https://dribbble.com/"><DribbbleLogo size={32} /></a></li>
                                        <li><a href="https://twitter.com/"><TwitterLogo size={32} /></a></li>
                                        <li><a href="https://instagram.com/"><InstagramLogo size={32} /></a></li>
                                        <li><a href="https://youtube.com/"><YoutubeLogo size={32} /></a></li>
                                    </ul>
                                </div>
                                <p className="copyright-text">
                                    &copy; 2024
                                </p>
                            </div>
                        </div>

                        <div className="humberg-menu">
                            <button>
                            <span></span>
                            <span></span>
                            <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="sidebar-bottom">
                        <div className="social-link-wrap">
                            <ul className="social-links">
                                <li><a href="https://dribbble.com/"><DribbbleLogo size={15} /></a></li>
                                <li><a href="https://twitter.com/"><TwitterLogo size={15} /></a></li>
                                <li><a href="https://instagram.com/"><InstagramLogo size={15} /></a></li>
                                <li><a href="https://youtube.com/"><YoutubeLogo size={15} /></a></li>
                            </ul>
                        </div>
                        <p className="copyright-text">
                            &copy; 2024
                        </p>
                    </div>
                </div>
            </div>





        </Fragment>
  )
}

export default Sidebar
