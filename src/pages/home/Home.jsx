import React from 'react'
import Navbar from '../../components/Navbar'
import HeroPage from './components/HeroPage'
import SignupFree from './components/SignupFree'

const Home = () => {
  return (
    <div>
        <div >
            <div>
                <Navbar />
                <HeroPage />
            </div>
            <div>
                <SignupFree />
            </div>
        </div>
    </div>
  )
}

export default Home