import React, { Fragment } from 'react'
import '../assets/css/custom.css';
import '../assets/css/responsive.css';

const Footer = () => {
  return (
    <Fragment>
        <footer class="footer-area">
            <div class="left">
                <p>&copy; 2024 All rights reserved by <a href="">Software Engineer | Milton Dey</a></p>
                {/* <a href="#">Software Engineer | Milton Dey</a> */}
            </div>
                <a href="#top" class="backto-top">Scroll to top <i class="las la-arrow-up"></i></a>
        </footer>



    </Fragment>
  )
}

export default Footer
