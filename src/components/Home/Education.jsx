import React, { Fragment } from 'react'
import '../../assets/css/custom.css'
import '../../assets/css/responsive.css'
import edc1 from '../../assets/img/edc-1.jpg'
import edc2 from '../../assets/img/edc-2.jpg'
import edc3 from '../../assets/img/edc-3.jpg'
import exp1 from '../../assets/img/exp-1.png'
import exp2 from '../../assets/img/exp-2.png'
import exp3 from '../../assets/img/exp-3.png'


const Education = () => {
  return (
    <Fragment>
            <section className="edc-and-exp-area">
                <div className="custom-container">
                    <div className="edc-and-exp-inner">
                        <div className="edc-and-exp-inner-box edc-wrap">
                            <h4 className="subtitle common-box">Education</h4>

                            <div className="edc-and-exp-lists">
                                <div className="edc-and-exp-box">
                                    <div className="img-box">
                                        <img src={edc1} alt="Education"/>
                                    </div>
                                    <div className="content">
                                        <span className="date">2007 - 2017</span>
                                        <h3><a href="#">Web Designer & Developer</a></h3>
                                        <p>Adobe Creative Cloud</p>
                                    </div>
                                </div>
                                <div className="edc-and-exp-box">
                                    <div className="img-box">
                                        <img src={edc2} alt="Education"/>
                                    </div>
                                    <div className="content">
                                        <span className="date">2017 - 2020</span>
                                        <h3><a href="#">Front-End Developer</a></h3>
                                        <p>Spotify</p>
                                    </div>
                                </div>
                                <div className="edc-and-exp-box">
                                    <div className="img-box">
                                        <img src={edc3} alt="Education"/>
                                    </div>
                                    <div className="content">
                                        <span className="date">2020 - 2024</span>
                                        <h3><a href="#">Webflow Developer & Co-Founder</a></h3>
                                        <p>IBM Technologies</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="edc-and-exp-inner-box exp-wrap">
                            <h4 className="subtitle common-box">Experience</h4>

                            <div className="edc-and-exp-lists">
                                <div className="edc-and-exp-box">
                                    <div className="img-box">
                                        <img src={exp1} alt="Education"/>
                                    </div>
                                    <div className="content">
                                        <span className="date">2007 - 2017</span>
                                        <h3><a href="#">Figma Designing & Prototyping</a></h3>
                                        <p>Bluebase Designs</p>
                                    </div>
                                </div>
                                <div className="edc-and-exp-box">
                                    <div className="img-box">
                                        <img src={exp2} alt="Education"/>
                                    </div>
                                    <div className="content">
                                        <span className="date">2017 - 2020</span>
                                        <h3><a href="#">Full Stack Developer</a></h3>
                                        <p>Larsen & Toubro</p>
                                    </div>
                                </div>
                                <div className="edc-and-exp-box">
                                    <div className="img-box">
                                        <img src={exp3} alt="Education"/>
                                    </div>
                                    <div className="content">
                                        <span className="date">2020 - 2024</span>
                                        <h3><a href="#">Cloud Development Operation</a></h3>
                                        <p>Mandro Studio</p>
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

export default Education
