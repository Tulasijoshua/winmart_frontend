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
import Navbar2 from '../../components/Navbar2'
import MobileHero from './components/MobileHero'

const Home = () => {
  return (
    <div className='w-full '>
        <div className='w-full hidden xl:pl-[5rem] pl-[2rem] md:flex items-start gap-2 bg-[#f9f9f9]'>
            <div className='maxHero flex-1 px-4'>
                <Navbar />
                <HeroPage />
            </div>
            <div className='2xl:w-[240px] xl:w-[240px] lg:w-[200px] w-[50px]'>
                <SignupFree />
            </div>
        </div>
        <div className='w-full md:hidden block'>
          <Navbar2 />
          <MobileHero />
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