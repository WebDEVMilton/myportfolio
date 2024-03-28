import React, { Fragment } from 'react'
import Sidebar from '../inc/Sidebar'
import Footer from '../inc/Footer'
import Header from '../components/Header'
import Project from '../components/Project'
import Partner from '../components/Partner'
import Education from '../components/Education'
import Service from '../components/Service'
import Stack from '../components/Stack'
import Blog from '../components/Blog'
import Testimonial from '../components/Testimonial'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'



const HomePage = () => {
  return (
    <Fragment>
        <Sidebar/>
        <main className="main">
            <div className="page-content-wrapper">
                <Header/>
                <Project/>
                <Partner/>
                <Education/>
                <Service/>
                <Stack/>
                <Blog/>
                <Testimonial/>
                <Gallery/>
                <Contact/>
                <Footer/>
            </div>
        </main>


    </Fragment>

  )
}

export default HomePage
