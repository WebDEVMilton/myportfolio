import React, { Fragment } from 'react'
import Sidebar from '../inc/Sidebar'
import Footer from '../inc/Footer'
import NewsLetterTwo from '../components/NewsLetterTwo'
import Contact from '../components/Contact'
const ContactPage = () => {
  return (
    <Fragment>
        <Sidebar/>
        <main className="main">
            <div className="page-content-wrapper">
                <NewsLetterTwo/>
                <Contact/>
                <Footer/>
            </div>
        </main>


    </Fragment>
  )
}

export default ContactPage
