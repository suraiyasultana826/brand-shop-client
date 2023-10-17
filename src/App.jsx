
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'


function App() {

  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    
    <Footer></Footer>
      
    </>
  )
}

export default App
