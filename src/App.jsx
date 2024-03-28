import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/inc/Sidebar'
import Home from './components/Home/Home'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      <main className="main">
        <div className="page-content-wrapper">
          <Home/>



      
        </div>



      </main>
    </>
  )
}

export default App
