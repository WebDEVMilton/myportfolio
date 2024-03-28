import React, { Fragment } from 'react'
import Sidebar from '../inc/Sidebar'
import Header from '../components/Header'
import Education from '../components/Education'
import Partner from '../components/Partner'
import Service from '../components/Service'
import Stack from '../components/Stack'
import Newsletter from '../components/Newsletter'
import Footer from '../inc/Footer'

const AboutPage = () => {
  return (
    <Fragment>
      <Sidebar/>
        <main className="main">
            <div className="page-content-wrapper">
                <Header/>
                <Education/>
                <Partner/>
                <Service/>
                <Stack/>
                <Newsletter/>
                <Footer/>
            </div>
        </main>
    </Fragment>
  )
}

export default AboutPage
