import React, { Fragment } from 'react';
import '../../assets/css/custom.css';
import '../../assets/css/responsive.css';

const Contact = () => {
  return (
    <Fragment>
      <section className="contact-area">
        <div className="custom-container">
          <div className="contact-header section-header">
            <h4 className="subtitle common-box">Contact</h4>

            <div className="animation-texts-wrap">
              <div className="animation-text-inner">
                <ul>
                  <li>⌘ It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ⌘</li>
                  <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ⌘</li>
                  <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ⌘</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="contact-inner">
            <div className="contact-form">
              <form id="ajax-form" action="" method="POST">
                <input type="hidden" name="access_key" value="0ea6f02e-35e1-4bc8-801a-f700e7c5a95c" />
                <input type="hidden" name="subject" value="Contact Form Submission" /> 
                
                <input type="text" name="name" placeholder="Name" />
                <input type="email" placeholder="Email" name="email" />
                <textarea name="message" id="message" placeholder="Message"></textarea>
                <button type="submit">Submit</button>
                <p className="text-base text-gray-400" style={{ marginTop: '12px' }} id="result"></p> 
              </form>
            </div>

            <div className="contact-infos">
              <h4 className="subtitle common-box">Address</h4>
              <ul>
                <li>
                  <div className="icon">
                    <i className="lar la-map"></i>
                  </div>
                  <div className="content">
                    <h3>Visit Me</h3>
                    <p>16/9, Down Street, Edinburgh<br />United Kingdom</p> 
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="las la-headphones"></i>
                  </div>
                  <div className="content">
                    <h3>Contact Info</h3>
                    <p>
                      <a href="tel:+1284789900">+1-2847-899</a>, <a href="tel:+1284789900">+1-2847-899</a>
                    </p>
                    <p><a href="mailto:yourcompanyemail@mail.com">yourcompanyemail@mail.com</a></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
