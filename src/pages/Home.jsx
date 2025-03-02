import React from 'react'
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import IntroSection from '../components/IntroSection';
import Testimonals from '../components/Testimonals';
import GenerateBtn from '../components/GenerateBtn';

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <IntroSection />
      <Testimonals />
      <GenerateBtn />
    </div>
  )
}

export default Home;