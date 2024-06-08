import React from 'react'
import FighterCard from '../Components/FighterCard'
import Footer from '../Components/Footer'
import SocialProfile from '../Components/SocialProfile'
import Hero from '../Components/Hero'
import Video from '../Components/Video'


function Home() {
    return (
        <div>
            
            <Hero />
            <FighterCard />
            <div className="app bg-white min-h-screen flex items-center justify-center">
                <SocialProfile />
            </div>
          
            <Video />
            <Footer />
        </div>
    )
}

export default Home