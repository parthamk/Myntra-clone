import React from 'react'
import "./SearchBar.css"

function SearchBar() {
  return (
    <div className='searchBar'>
        <input type="text" placeholder='Search Product Here..' className='inputArea'/>
    </div>
  )
}

export default SearchBar