import React from 'react'
import LogoMain from "../../assets/logo.png"
import "./Logo.css"
import {NavLink} from "react-router-dom";

function Logo() {

  return (
    <div>
        <NavLink to="/"><img src={LogoMain} alt="Logo" className='icon-holder'/></NavLink>
    </div>

  )
  
}

export default Logo