import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/Header'
import Footer from '../sections/Footer'

export default function MainLayout() {
  return (
    <div className=''>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
