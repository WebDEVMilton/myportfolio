import React, { Fragment } from 'react'
import Sidebar from '../inc/Sidebar'
import Footer from '../inc/Footer'
import AllBlog from '../components/AllBlog'

const BlogPage = () => {
  return (
    <Fragment>
        <Sidebar/>
        <main className="main">
            <div className="page-content-wrapper">
                <AllBlog/>
                <Footer/>
            </div>
        </main>

    </Fragment>
  )
}

export default BlogPage
