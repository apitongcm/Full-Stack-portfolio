import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const AppLayout = () => {
  return (
    <main className='w-full bg-[#FFFFFF] dark:bg-[#181A2A]'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default AppLayout