import React, { Fragment } from 'react'
import '../../assets/css/custom.css'
import '../../assets/css/responsive.css'
import stack1 from '../../assets/img/stack-1.png'
import stack2 from '../../assets/img/stack-2.png'
import stack3 from '../../assets/img/stack-3.png'
import stack4 from '../../assets/img/stack-4.png'
import stack5 from '../../assets/img/stack-5.png'
import stack6 from '../../assets/img/stack-6.png'

const Stack = () => {
  return (
    <Fragment>
            <section className="stack-area">
                <div className="custom-container">
                    <div className="stack-header section-header">
                        <h4 className="common-box subtitle">
                            Stack
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

                    <div className="stack-lists">
                        <div className="edc-and-exp-box stack-box">
                            <div className="img-box">
                                <img src={stack1} alt="Stack"/>
                            </div>
                            <div className="content">
                                <h3><a href="#">Framer</a></h3>
                                <p>Start you dream sith with AI. Zero code, Maximum Speed.</p>
                            </div>
                        </div>
                        <div className="edc-and-exp-box stack-box">
                            <div className="img-box">
                                <img src={stack2} alt="Stack"/>
                            </div>
                            <div className="content">
                                <h3><a href="#">Hyper</a></h3>
                                <p>Hyper is an electron based terminal Application.</p>
                            </div>
                        </div>
                        <div className="edc-and-exp-box stack-box">
                            <div className="img-box">
                                <img src={stack3} alt="Stack"/>
                            </div>
                            <div className="content">
                                <h3><a href="#">Brave Browser</a></h3>
                                <p>The best privacy policy online network.</p>
                            </div>
                        </div>
                        <div className="edc-and-exp-box stack-box">
                            <div className="img-box">
                                <img src={stack4} alt="Stack"/>
                            </div>
                            <div className="content">
                                <h3><a href="#">IA Writer</a></h3>
                                <p>Pure writing pleasure with in your hands.</p>
                            </div>
                        </div>
                        <div className="edc-and-exp-box stack-box">
                            <div className="img-box">
                                <img src={stack5} alt="Stack"/>
                            </div>
                            <div className="content">
                                <h3><a href="#">Superhuman</a></h3>
                                <p>The fastest Email Experience ever made.</p>
                            </div>
                        </div>
                        <div className="edc-and-exp-box stack-box">
                            <div className="img-box">
                                <img src={stack6} alt="Stack"/>
                            </div>
                            <div className="content">
                                <h3><a href="#">Typefully</a></h3>
                                <p>Write better tweets. Grow your audience.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


    </Fragment>

  )
}

export default Stack
