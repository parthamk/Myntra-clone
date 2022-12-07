import React from 'react'
import Header from './components/Header'
import HomeSlider from "./home/HomeSlider"

function Home() {
  return (
    <div>
       
        <div className="home-page"> 
          <Header />
          <HomeSlider /> 
        </div>
    </div>
  )
}

export default Home