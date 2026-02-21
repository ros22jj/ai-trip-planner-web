import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9 '>
      <h2
      className='font-extrabold text-[60px] text-center mt-16'>
        <span className='text-[#f56551]'>Discover your next Adventure with AI :</span>
         personalized Itinaries at Your FingerTips </h2>
 <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, 
    creating custom Itinaries tailored to your interests and budget .</p>

    <Link to="/create-trip">
    <Button>Get Started, It's Free </Button>
    </Link >

    <img src='/image.png' className='-mt-[20]' alt='Landing Image' />
    </div>

  )
}

export default Hero
