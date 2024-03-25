import React, { Fragment } from 'react'
import Header from './Header'
import '../../assets/css/custom.css'
import '../../assets/css/responsive.css'
// import Project from './Project'
import Partner from './Partner'
import Education from './Education'
import Service from './Service'
import Stack from './Stack'
import Blog from './Blog'
import Testimonial from './Testimonial'



const Home = () => {
  return (
    <Fragment>
        <Header/>
        {/* <Project/> */}
        <Partner/>
        <Education/>
        <Service/>
        <Stack/>
        <Blog/>
        <Testimonial/>
        





    </Fragment>


    
  )
}

export default Home
