import React from 'react'
import Hero from '../components/Hero'
import ScheduleVisit from '../components/ScheduleVisit'
import Services from '../components/Services'
import Process from '../components/Process'
import Equipment from '../components/Equipment'
import Brands from '../components/Brands'
import ServiceArea from '../components/ServiceArea'
import Features from '../components/Features'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <>
      <Hero />
      <ScheduleVisit />
      <Services />
      <Process />
      <Equipment />
      <Brands />
      <ServiceArea />
      <Features />
      <Reviews />
    </>
  )
}

export default Home
