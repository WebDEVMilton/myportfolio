import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/HomePage'
import ProjectPage from '../Pages/ProjectPage'
import AboutPage from '../Pages/AboutPage'
import GalleryPage from '../Pages/GalleryPage'
import ContactPage from '../Pages/ContactPage'
import BlogPage from '../Pages/BlogPage'


const AppRouter = () => {
  return (
    <Fragment>
          <Routes>
            <Route index element={<HomePage/>}/>
          <Route  path='/' element={<HomePage/>}/>
          <Route  path='/project' element={<ProjectPage/>}/>
          <Route  path='/about' element={<AboutPage/>}/>
          <Route  path='/gallery' element={<GalleryPage/>}/>
          <Route  path='/contact' element={<ContactPage/>}/>
          <Route  path='/blog' element={<BlogPage/>}/>

          </Routes>

    </Fragment>

  )
}

export default AppRouter
