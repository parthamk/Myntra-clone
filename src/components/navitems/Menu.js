import React from 'react'
// import Men from './mininav/Men'
// import Women from './mininav/Women'
// import Kid from './mininav/Kid'
import "./Menu.css"
// import HomeAndLiving from './mininav/HomeAndLiving'
// import Beauty from './mininav/Beauty'
// import Studio from './mininav/Studio'
import {NavLink} from "react-router-dom";

function Menu() {
  return (
    <>
        <ul className="menuitems">
          <li><NavLink to="/productpage">Men</NavLink></li>
          <li><NavLink to="/">Women</NavLink></li>
          <li><NavLink to="/">Kid</NavLink></li>
          <li><NavLink to="/">Home & Living</NavLink></li>
          <li><NavLink to="/">Beauty</NavLink></li>
          <li><NavLink to="/">Studio</NavLink></li>
        </ul>
        {/* <Men />
        <Women />
        <Kid />
        <HomeAndLiving />
        <Beauty />
        <Studio /> */}
    </>
  )
}

export default Menu