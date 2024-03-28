import React, { Fragment } from 'react'
import '../assets/css/custom.css'
import '../assets/css/responsive.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import project1 from '../assets/img/project-1.png'
import project2 from '../assets/img/project-2.png'
import project3 from '../assets/img/project-3.png'
import project4 from '../assets/img/project-4.png'
import project5 from '../assets/img/project-5.png'
import project6 from '../assets/img/project-6.png'
import rightarrow from '../assets/img/right-arrow.svg'


const Project = () => {
  return (
    <Fragment>
            <section class="project-area">
                <div class="custom-container">
                    <div class="project-header section-header">
                        <a href="project.html" class="theme-btn common-box">
                            <span>
                                <span class="normal">Projects <i class="las la-arrow-right"></i></span>
                                <span class="hover">Projects <i class="las la-arrow-right"></i></span>
                            </span>
                        </a>
                        <div class="animation-texts-wrap">
                            <div class="animation-text-inner">
                                <ul>
                                    <li>⌘ It is a long established fact that a reader will distracted by the readable content of a page when looking an its readable ⌘</li>
                                    <li>It is a long established fact that a reader will distracted by the readable content of a page when looking an its readable ⌘</li>
                                    <li>It is a long established fact that a reader will distracted by the readable content of a page when looking an its readable ⌘</li>
                                </ul>
                            </div>
                        </div>

                        <div class="project-slider-action-btn">
                            <div class="project-button-prev"><i class="las la-angle-left"></i></div>
                            <div class="project-button-next"><i class="las la-angle-right"></i></div>
                        </div>
                    </div>

                    <div class="project-slider-wrapper">
                        <div class="swiper project-slider">
                            <div class="swiper-wrapper">
                            <Carousel
                            showArrows={true} 
                            infiniteLoop={true} 
                            showThumbs={false} 
                            showStatus={false}
                            >
                                <div class="swiper-slide">
                                    <div class="project-slide-col-2">
                                        <div class="project-slider-box">
                                            <a href="project-detail.html" class="overlay-link"></a>
                                            <div class="project-img">
                                                <img src={project1} alt="Project"/>
                                                <span class="badge-year">
                                                    <span class="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="project-content">
                                                <h3>Retro Remix</h3>
                                                <p>Ux Design</p>
                                                <a href="project-detail.html" class="theme-btn common-box">
                                                    <span>
                                                        <span class="normal"><i class="las la-angle-right"></i></span>
                                                        <span class="hover"><img src={rightarrow} alt="icon"/></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="project-slider-box">
                                            <a href="project-detail.html" class="overlay-link"></a>
                                            <div class="project-img">
                                                <img src={project2} alt="Project"/>
                                                <span class="badge-year">
                                                    <span class="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="project-content">
                                                <h3>Light Play</h3>
                                                <p>SEO</p>
                                                <a href="project-detail.html" class="theme-btn common-box">
                                                    <span>
                                                        <span class="normal"><i class="las la-angle-right"></i></span>
                                                        <span class="hover"><img src={rightarrow} alt="icon"/></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="swiper-slide">
                                    <div class="project-slide-col-2">
                                        <div class="project-slider-box">
                                            <a href="project-detail.html" class="overlay-link"></a>
                                            <div class="project-img">
                                                <img src={project3} alt="Project"/>
                                                <span class="badge-year">
                                                    <span class="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="project-content">
                                                <h3>Mystical Meodows</h3>
                                                <p>Web Development</p>
                                                <a href="project-detail.html" class="theme-btn common-box">
                                                    <span>
                                                        <span class="normal"><i class="las la-angle-right"></i></span>
                                                        <span class="hover"><img src={rightarrow} alt="icon"/></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="project-slider-box">
                                            <a href="project-detail.html" class="overlay-link"></a>
                                            <div class="project-img">
                                                <img src={project4} alt="Project"/>
                                                <span class="badge-year">
                                                    <span class="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="project-content">
                                                <h3>Synthwave Sympony</h3>
                                                <p>Social Media</p>
                                                <a href="project-detail.html" class="theme-btn common-box">
                                                    <span>
                                                        <span class="normal"><i class="las la-angle-right"></i></span>
                                                        <span class="hover"><img src={rightarrow} alt="icon"/></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="swiper-slide">
                                    <div class="project-slide-col-2">
                                        <div class="project-slider-box">
                                            <a href="project-detail.html" class="overlay-link"></a>
                                            <div class="project-img">
                                                <img src={project5} alt="Project"/>
                                                <span class="badge-year">
                                                    <span class="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="project-content">
                                                <h3>Cybernetic Dreams</h3>
                                                <p>Brand Marketing</p>
                                                <a href="project-detail.html" class="theme-btn common-box">
                                                    <span>
                                                        <span class="normal"><i class="las la-angle-right"></i></span>
                                                        <span class="hover"><img src={rightarrow} alt="icon"/></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="project-slider-box">
                                            <a href="project-detail.html" class="overlay-link"></a>
                                            <div class="project-img">
                                                <img src={project6} alt="Project"/>
                                                <span class="badge-year">
                                                    <span class="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="project-content">
                                                <h3>Mindscapes</h3>
                                                <p>Robotic Automation</p>
                                                <a href="project-detail.html" class="theme-btn common-box">
                                                    <span>
                                                        <span class="normal"><i class="las la-angle-right"></i></span>
                                                        <span class="hover"><img src={rightarrow} alt="icon"/></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="swiper-slide">
                                    <div class="project-slide-col-2">
                                        <div class="project-slider-box">
                                            <a href="project-detail.html" class="overlay-link"></a>
                                            <div class="project-img">
                                                <img src={project1} alt="Project"/>
                                                <span class="badge-year">
                                                    <span class="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="project-content">
                                                <h3>Retro Remix</h3>
                                                <p>Ux Design</p>
                                                <a href="project-detail.html" class="theme-btn common-box">
                                                    <span>
                                                        <span class="normal"><i class="las la-angle-right"></i></span>
                                                        <span class="hover"><img src={rightarrow} alt="icon"/></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="project-slider-box">
                                            <a href="project-detail.html" class="overlay-link"></a>
                                            <div class="project-img">
                                                <img src={project6} alt="Project"/>
                                                <span class="badge-year">
                                                    <span class="badge-inner">
                                                        <span>2024</span>
                                                        <span>2024</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="project-content">
                                                <h3>Light Play</h3>
                                                <p>SEO</p>
                                                <a href="project-detail.html" class="theme-btn common-box">
                                                    <span>
                                                        <span class="normal"><i class="las la-angle-right"></i></span>
                                                        <span class="hover"><img src={rightarrow} alt="icon"/></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Carousel>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </Fragment>
  )
}

export default Project
