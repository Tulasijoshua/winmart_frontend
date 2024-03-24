import React from 'react'
import Navbar from '../../components/Navbar'
import HeroPage from './components/HeroPage'
import SignupFree from './components/SignupFree'

const Home = () => {
  return (
    <div className='w-full pl-[5rem]'>
        <div className='w-full flex items-start gap-2'>
            <div className='flex-1 px-4'>
                <Navbar />
                <HeroPage />
            </div>
            <div className='w-[250px]'>
                <SignupFree />
            </div>
        </div>
    </div>
  )
}

export default Home