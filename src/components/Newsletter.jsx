import React, { Fragment } from 'react'
import '../assets/css/custom.css'
import '../assets/css/responsive.css'

const Newsletter = () => {
  return (
    <Fragment>
            <section className="newsletter-area">
                <div className="custom-container">
                    <div className="newsletter-header section-header">
                        <h4 className="common-box subtitle">
                            Stay up to date
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
                    <form action="" method="POST" id="subscribe-form">
                        <div className="newsletter-box">
                            <input type="email" name="email" placeholder="Your email"/> 
                            <button type="submit">Book an appointment with me</button>
                        </div>
                        {/* <p className="text-base text-gray-400" style="margin-top: 12px;" id="result1"></p> */}
                    </form>

                </div>
            </section>


    </Fragment>


  )
}

export default Newsletter
