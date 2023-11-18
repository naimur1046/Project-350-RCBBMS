import React from 'react'
import Header from '../component/additional/Header'
import Footer from '../component/additional/Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
       <Header/>
       <Outlet/>
       <Footer/>
    </>
  )
}
