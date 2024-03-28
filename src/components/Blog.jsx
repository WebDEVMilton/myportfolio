import React, { Fragment } from 'react'
import '../assets/css/custom.css'
import '../assets/css/responsive.css'
import blog1 from '../assets/img/blog-1.png'
import blog2 from '../assets/img/blog-2.png'
import blog3 from '../assets/img/blog-3.png'

const Blog = () => {
  return (
    <Fragment>
                    <section class="blog-area">
                <div class="custom-container">
                    <div class="blog-header section-header">
                        <a href="blog.html" class="theme-btn common-box">
                            <span>
                                <span class="normal">Blog <i class="las la-arrow-right"></i></span>
                                <span class="hover">Blog <i class="las la-arrow-right"></i></span>
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
                    </div>

                    <div class="blog-items">
                        <div class="project-slider-box blog-box">
                            <a href="blog-detail.html" class="overlay-link"></a>
                            <div class="project-img">
                                <img src={blog1} alt="Blog"/>
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
                                <a href="blog-detail.html" class="theme-btn common-box">
                                    <span>
                                        <span class="normal"><i class="las la-angle-right"></i></span>
                                        {/* <span class="hover"><img src="assets/imgs/right-arrow.svg" alt="icon"></span> */}
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="project-slider-box blog-box">
                            <a href="blog-detail.html" class="overlay-link"></a>
                            <div class="project-img">
                                <img src={blog2} alt="Blog"/>
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
                                <a href="#" class="theme-btn common-box">
                                    <span>
                                        <span class="normal"><i class="las la-angle-right"></i></span>
                                        {/* <span class="hover"><img src="assets/imgs/right-arrow.svg" alt="icon"></span> */}
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="project-slider-box blog-box">
                            <a href="blog-detail.html" class="overlay-link"></a>
                            <div class="project-img">
                                <img src={blog3} alt="Blog"/>
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
                                <a href="#" class="theme-btn common-box">
                                    <span>
                                        <span class="normal"><i class="las la-angle-right"></i></span>
                                        {/* <span class="hover"><img src="assets/imgs/right-arrow.svg" alt="icon"></span> */}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>




    </Fragment>


  )
}

export default Blog
