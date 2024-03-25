import React, { Fragment } from 'react'
import '../../assets/css/custom.css'
import '../../assets/css/responsive.css'
import project1 from '../../assets/img/project-1.png'
import rightarrow from '../../assets/img/right-arrow.svg'
import project4 from '../../assets/img/project-4.png'

const Project = () => {
  return (
    <Fragment>
                    {/* <!-- Project
            ======================================= --> */}
            <section className="project-area">
                <div className="custom-container">
                    <div className="project-header section-header">
                        <a href="project.html" className="theme-btn common-box">
                            <span>
                                <span className="normal">Projects <i className="las la-arrow-right"></i></span>
                                <span className="hover">Projects <i className="las la-arrow-right"></i></span>
                            </span>
                        </a>
                        <div className="animation-texts-wrap">
                            <div className="animation-text-inner">
                                <ul>
                                    <li>⌘ It is a long established fact that a reader will distracted by the readable content of a page when looking an its readable ⌘</li>
                                    <li>It is a long established fact that a reader will distracted by the readable content of a page when looking an its readable ⌘</li>
                                    <li>It is a long established fact that a reader will distracted by the readable content of a page when looking an its readable ⌘</li>
                                </ul>
                            </div>
                        </div>

                        <div className="project-slider-action-btn">
                            <div className="project-button-prev"><i className="las la-angle-left"></i></div>
                            <div className="project-button-next"><i className="las la-angle-right"></i></div>
                        </div>
                    </div>

                    <div className="project-slider-wrapper">
                        <div className="swiper project-slider">
                            <div className="swiper-wrapper">
        
                                <div className="swiper-slide">
                                    <div className="project-slide-col-2">
                                        <div className="project-slider-box">
                                            <a href="project-detail.html" className="overlay-link"></a>
                                            <div className="project-img">
                                                <img src={project1} alt="Project"/>
                                                <span className="badge-year">
                                                    <span className="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="project-content">
                                                <h3>Retro Remix</h3>
                                                <p>Ux Design</p>
                                                <a href="project-detail.html" className="theme-btn common-box">
                                                    <span>
                                                        <span className="normal"><i className="las la-angle-right"></i></span>
                                                        <span className="hover"><img src={rightarrow} alt="icon"/></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="project-slider-box">
                                            <a href="project-detail.html" className="overlay-link"></a>
                                            <div className="project-img">
                                                <img src={project4} alt="Project"/>
                                                <span className="badge-year">
                                                    <span className="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="project-content">
                                                <h3>Light Play</h3>
                                                <p>SEO</p>
                                                <a href="project-detail.html" className="theme-btn common-box">
                                                    <span>
                                                        <span className="normal"><i className="las la-angle-right"></i></span>
                                                        {/* <span className="hover"><img src="assets/imgs/right-arrow.svg" alt="icon"></span> */}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="swiper-slide">
                                    <div className="project-slide-col-2">
                                        <div className="project-slider-box">
                                            <a href="project-detail.html" className="overlay-link"></a>
                                            <div className="project-img">
                                                {/* <img src="assets/imgs/project-2.png" alt="Project"> */}
                                                <span className="badge-year">
                                                    <span className="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="project-content">
                                                <h3>Mystical Meodows</h3>
                                                <p>Web Development</p>
                                                <a href="project-detail.html" className="theme-btn common-box">
                                                    <span>
                                                        <span className="normal"><i className="las la-angle-right"></i></span>
                                                        {/* <span className="hover"><img src="assets/imgs/right-arrow.svg" alt="icon"></span> */}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="project-slider-box">
                                            <a href="project-detail.html" className="overlay-link"></a>
                                            <div className="project-img">
                                                {/* <img src="assets/imgs/project-5.png" alt="Project"> */}
                                                <span className="badge-year">
                                                    <span className="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="project-content">
                                                <h3>Synthwave Sympony</h3>
                                                <p>Social Media</p>
                                                <a href="project-detail.html" className="theme-btn common-box">
                                                    <span>
                                                        <span className="normal"><i className="las la-angle-right"></i></span>
                                                        {/* <span className="hover"><img src="assets/imgs/right-arrow.svg" alt="icon"></span> */}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="swiper-slide">
                                    <div className="project-slide-col-2">
                                        <div className="project-slider-box">
                                            <a href="project-detail.html" className="overlay-link"></a>
                                            <div className="project-img">
                                                {/* <img src="assets/imgs/project-3.png" alt="Project"> */}
                                                <span className="badge-year">
                                                    <span className="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="project-content">
                                                <h3>Cybernetic Dreams</h3>
                                                <p>Brand Marketing</p>
                                                <a href="project-detail.html" className="theme-btn common-box">
                                                    <span>
                                                        <span className="normal"><i className="las la-angle-right"></i></span>
                                                        {/* <span className="hover"><img src="assets/imgs/right-arrow.svg" alt="icon"></span> */}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="project-slider-box">
                                            <a href="project-detail.html" className="overlay-link"></a>
                                            <div className="project-img">
                                                {/* <img src="assets/imgs/project-6.png" alt="Project"> */}
                                                <span className="badge-year">
                                                    <span className="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="project-content">
                                                <h3>Mindscapes</h3>
                                                <p>Robotic Automation</p>
                                                <a href="project-detail.html" className="theme-btn common-box">
                                                    <span>
                                                        <span className="normal"><i className="las la-angle-right"></i></span>
                                                        {/* <span className="hover"><img src="assets/imgs/right-arrow.svg" alt="icon"></span> */}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="swiper-slide">
                                    <div className="project-slide-col-2">
                                        <div className="project-slider-box">
                                            <a href="project-detail.html" className="overlay-link"></a>
                                            <div className="project-img">
                                                {/* <img src="assets/imgs/project-1.png" alt="Project"> */}
                                                <span className="badge-year">
                                                    <span className="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="project-content">
                                                <h3>Retro Remix</h3>
                                                <p>Ux Design</p>
                                                <a href="project-detail.html" className="theme-btn common-box">
                                                    <span>
                                                        <span className="normal"><i className="las la-angle-right"></i></span>
                                                        {/* <span className="hover"><img src="assets/imgs/right-arrow.svg" alt="icon"></span> */}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="project-slider-box">
                                            <a href="project-detail.html" className="overlay-link"></a>
                                            <div className="project-img">
                                                {/* <img src="assets/imgs/project-4.png" alt="Project"> */}
                                                <span className="badge-year">
                                                    <span className="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="project-content">
                                                <h3>Light Play</h3>
                                                <p>SEO</p>
                                                <a href="project-detail.html" className="theme-btn common-box">
                                                    <span>
                                                        <span className="normal"><i className="las la-angle-right"></i></span>
                                                        {/* <span className="hover"><img src="assets/imgs/right-arrow.svg" alt="icon"></span> */}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Project --> */}



    </Fragment>
  )
}

export default Project
