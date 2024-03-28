import React, { Fragment } from 'react'
import Sidebar from '../inc/Sidebar'
import Footer from '../inc/Footer'
import AllGallery from '../components/AllGallery'

const GalleryPage = () => {
  return (
    <Fragment>
      <Sidebar/>
        <main className="main">
            <div className="page-content-wrapper">
                <AllGallery/>
                <Footer/>
            </div>
        </main>


    </Fragment>
  )
}

export default GalleryPage
