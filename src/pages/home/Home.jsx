import React from 'react'
import Navbar from '../../components/Navbar'
import HeroPage from './components/HeroPage'
import SignupFree from './components/SignupFree'
import Category from './components/Category'
import Trending from './components/Trending'
import Payday from './components/Payday'
import Featured from './components/Featured'
import Download from './components/Download'
import Available from './components/Available'
import Contact from './components/Contact'
import Footer from '../../components/Footer'

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
        <Trending />
        <Payday />
        <Featured title='Featured Products' />
        <Featured title='Top Sales' />
        <Download />
        <Available />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home