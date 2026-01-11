import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/Header'

export default function MainLayout() {
  return (
    <div className=''>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
