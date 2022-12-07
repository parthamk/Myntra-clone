import React from 'react'
import Header from './components/Header'
import HomeSlider from "./home/HomeSlider"

function Home() {
  return (
    <div>
        <Header />
        <HomeSlider />
        <div className="home-page">  
        </div>
    </div>
  )
}

export default Home