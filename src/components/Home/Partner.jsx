import React, { Fragment } from 'react'
import '../../assets/css/custom.css'
import '../../assets/css/responsive.css'
import client1 from '../../assets/img/client-1.png'
import client2 from '../../assets/img/client-2.png'
import client3 from '../../assets/img/client-3.png'
import client4 from '../../assets/img/client-4.png'
import client5 from '../../assets/img/client-5.png'
import client6 from '../../assets/img/client-6.png'


const Partner = () => {
  return (
    <Fragment>

            <section className="partner-area">
                <div className="custom-container">
                    <div className="partner-header section-header">
                        <h4 className="common-box subtitle">
                            Partners
                        </h4>
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

                    <div className="partner-slider-wrap">
                        <div className="partner-slider-inner">
                            <ul>
                                <li className="common-box"><img src={client1} alt="Client"/></li>
                                <li className="common-box"><img src={client2} alt="Client"/></li>
                                <li className="common-box"><img src={client3} alt="Client"/></li>
                                <li className="common-box"><img src={client4} alt="Client"/></li>
                                <li className="common-box"><img src={client5} alt="Client"/></li>
                                <li className="common-box"><img src={client6} alt="Client"/></li>
                                <li className="common-box"><img src={client1} alt="Client"/></li>
                                <li className="common-box"><img src={client2} alt="Client"/></li>
                                <li className="common-box"><img src={client3} alt="Client"/></li>
                                <li className="common-box"><img src={client4} alt="Client"/></li>
                                <li className="common-box"><img src={client5} alt="Client"/></li>
                                <li className="common-box"><img src={client6} alt="Client"/></li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-experience-wrap">
                        <div className="project-experience">
                            <h2>1.5+</h2>
                            <p>Years of experience</p>
                        </div>
                        <div className="project-experience">
                            <h2>40+</h2>
                            <p>Completed Projects</p>
                        </div>
                        <div className="project-experience">
                            <h2>13+</h2>
                            <p>Happy Client</p>
                        </div>
                    </div>
                </div>
            </section>
           




    </Fragment>



  )
}

export default Partner
