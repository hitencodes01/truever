import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// import HomePage from './components/HomePage.jsx';
function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout