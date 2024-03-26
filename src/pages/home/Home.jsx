import React from 'react'
import Navbar from '../../components/Navbar'
import HeroPage from './components/HeroPage'
import SignupFree from './components/SignupFree'
import Category from './components/Category'

const Home = () => {
  return (
    <div className='w-full '>
        <div className='w-full pl-[5rem] flex items-start gap-2 bg-[#f9f9f9]'>
            <div className='flex-1 px-4'>
                <Navbar />
                <HeroPage />
            </div>
            <div className='w-[280px]'>
                <SignupFree />
            </div>
        </div>
        <Category />
    </div>
  )
}

export default Home