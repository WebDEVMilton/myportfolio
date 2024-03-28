import React, { Fragment } from 'react'
import '../../assets/css/custom.css'
import '../../assets/css/responsive.css'
import gallery1 from '../../assets/img/gallery-1.jpg'
import gallery2 from '../../assets/img/gallery-2.jpg'
import gallery3 from '../../assets/img/gallery-3.jpg'
import gallery4 from '../../assets/img/gallery-4.jpg'

const Gallery = () => {
  return (
    <Fragment>
            <section className="gallery-area">
                <div className="custom-container">
                    <div className="gallery-header section-header">
                        <h4 className="subtitle common-box">Gallery</h4>

                        <div className="animation-texts-wrap">
                            <div className="animation-text-inner">
                                <ul>
                                    <li>⌘ It is a long established fact that a reader will distracted by the readable content of a page when looking an its readable ⌘</li>
                                    <li>It is a long established fact that a reader will distracted by the readable content of a page when looking an its readable ⌘</li>
                                    <li>It is a long established fact that a reader will distracted by the readable content of a page when looking an its readable ⌘</li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    <div className="gallery-slider-wrapper">
                        <div className="gallery-lists-anim">
                            <div className="gallery-box">
                                <img src={gallery1} alt="Gallery"/>
                            </div>
                            <div className="gallery-box">
                                <img src={gallery2} alt="Gallery"/>
                            </div>
                            <div className="gallery-box">
                                <img src={gallery3} alt="Gallery"/>
                            </div>
                            <div className="gallery-box">
                                <img src={gallery4} alt="Gallery"/>
                            </div>
                            <div className="gallery-box">
                                <img src={gallery1} alt="Gallery"/>
                            </div>
                            <div className="gallery-box">
                                <img src={gallery2} alt="Gallery"/>
                            </div>
                            <div className="gallery-box">
                                <img src={gallery3} alt="Gallery"/>
                            </div>
                            <div className="gallery-box">
                                <img src={gallery4} alt="Gallery"/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



    </Fragment>

  )
}

export default Gallery
