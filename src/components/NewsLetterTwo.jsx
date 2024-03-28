import React, { Fragment } from 'react'
import '../assets/css/custom.css'
import '../assets/css/responsive.css'
import leaf from '../assets/img/leaf.png'
import tree1 from '../assets/img/tree-1.png'
import tree2 from '../assets/img/tree-2.png'

const NewsLetterTwo = () => {
  return (
    <Fragment>
            <section class="newsletter-area">
                <div class="custom-container">
                    <div class="newsletter-header section-header">
                        <h4 class="common-box subtitle">
                            Stay up to date
                        </h4>
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

                    <form action="https://wpriverthemes.com/HTML/stag/assets/mail/subscribe.php" method="POST" id="subscribe-form">
                        <div class="newsletter-box">
                            <input type="email" name="email" placeholder="Your email"/>
                            <button type="submit">Book an appointment with me</button>
                        </div>
                        {/* <p class="text-base text-gray-400" style="margin-top: 12px;" id="result1"></p> */}
                    </form>


                    <div class="project-experience-wrap">
                        <div class="project-experience">
                            <h2>12+</h2>
                            <p>Years of experience</p>
                            <div class="icon">
                                <img src={leaf} alt="icon"/>
                            </div>
                        </div>
                        <div class="project-experience">
                            <h2>100+</h2>
                            <p>Completed Projects</p>
                            <div class="icon">
                                <img src={tree1} alt="icon"/>
                            </div>
                        </div>
                        <div class="project-experience">
                            <h2>$16M</h2>
                            <p>Partners Raised</p>
                            <div class="icon">
                                <img src={tree2}  alt="icon"/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


    </Fragment>
  )
}

export default NewsLetterTwo
