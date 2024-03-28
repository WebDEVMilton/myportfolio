import React, { Fragment,Component } from 'react'
import '../assets/css/custom.css'
import '../assets/css/responsive.css'
import testimonial1 from '../assets/img/testimonial-1.png'
import testimonial2 from '../assets/img/testimonial-2.png'
import testimonialicon1 from '../assets/img/testimonial-icon-1.png'
import testimonialicon2 from '../assets/img/testimonial-icon-2.png'
import testimonialshape from '../assets/img/testimonial-shape.svg'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Testimonial = () => {
  return (
    <Fragment>
            <section class="testimonial-area">
                <div class="custom-container">
                    <div class="testimonial-header section-header">
                        <h4 class="subtitle common-box">Testimonial</h4>

                        {/* <div class="testimonial-slider-action-btn">
                            <div class="testimonial-button-prev"><i class="las la-angle-left"></i></div>
                            <div class="testimonial-button-next"><i class="las la-angle-right"></i></div>
                        </div> */}
                    </div>

                    <div class="testimonial-slider-wrapper">
                        <div class="swiper testimonial-slider">
                            <div class="swiper-wrapper">
                            <Carousel
                             showArrows={true} 
                             infiniteLoop={true} 
                             showThumbs={false} 
                             showStatus={false}
                             >

                                <div class="swiper-slide">
                                    <div class="testimonial-box">
                                        <div class="img-box">
                                            <img src={testimonial1} alt="Testimonial"/>
                                        </div>
                                        <div class="content">
                                            <div class="content-top">
                                                <h3>Larry Daley</h3>
                                                <span>Product Designer</span>
                                                <div class="icon">
                                                    <img src={testimonialicon1} alt="shape"/>
                                                </div>
                                            </div>
                                            <div class="content-bottom">
                                                <img src={testimonialshape} alt="shape" class="line-shape"/>
                                                <p>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience and industries.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="swiper-slide">
                                    <div class="testimonial-box">
                                        <div class="img-box">
                                            <img src={testimonial2} alt="Testimonial"/>
                                        </div>
                                        <div class="content">
                                            <div class="content-top">
                                                <h3>Manny William</h3>
                                                <span>Full Stack Developer</span>
                                                <div class="icon">
                                                    <img src={testimonialicon2} alt="shape"/>
                                                </div>
                                            </div>
                                            <div class="content-bottom">
                                                <img src={testimonialshape} alt="shape" class="line-shape"/>
                                                <p>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience and industries.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="swiper-slide">
                                    <div class="testimonial-box">
                                        <div class="img-box">
                                            <img src={testimonial1} alt="Testimonial"/>
                                        </div>
                                        <div class="content">
                                            <div class="content-top">
                                                <h3>Larry Daley</h3>
                                                <span>Product Designer</span>
                                                <div class="icon">
                                                    <img src={testimonialicon1} alt="shape"/>
                                                </div>
                                            </div>
                                            <div class="content-bottom">
                                                <img src={testimonialshape} alt="shape" class="line-shape"/>
                                                <p>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience and industries.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="swiper-slide">
                                    <div class="testimonial-box">
                                        <div class="img-box">
                                            <img src={testimonial2} alt="Testimonial"/>
                                        </div>
                                        <div class="content">
                                            <div class="content-top">
                                                <h3>Manny William</h3>
                                                <span>Full Stack Developer</span>
                                                <div class="icon">
                                                    <img src={testimonialicon2} alt="shape"/>
                                                </div>
                                            </div>
                                            <div class="content-bottom">
                                                <img src={testimonialshape} alt="shape" class="line-shape"/>
                                                <p>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience and industries.</p>
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

export default Testimonial
