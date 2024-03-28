import React, { Fragment } from 'react'
import AllProject from '../components/AllProject'
import Sidebar from '../inc/Sidebar'
import Footer from '../inc/Footer'

const ProjectPage = () => {
  return (
    <Fragment>

      
      <Sidebar/>
        <main className="main">
            <div className="page-content-wrapper">
                <AllProject/>
                <Footer/>
            </div>
        </main>
    </Fragment>
  )
}

export default ProjectPage
