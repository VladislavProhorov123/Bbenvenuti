import React from 'react'
import Hero from '../sections/Hero'
import Collections from '../sections/Collections'
import Featured from '../sections/Featured'
import WhyChooseUs from '../sections/WhyChooseUs'

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <Collections />
      <Featured />
      <WhyChooseUs />
    </div>
  )
}
