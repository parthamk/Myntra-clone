import React, {useState} from 'react'



import "./SearchBar.css"

function SearchBar({history}) {
  const [keyword, setKeyword] = useState('');

    const searchHandler = (e) => {
        e.preventDefault()

        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    // const [filterText, setFilterText] = useState('');
    // const [inStockOnly, setInStockOnly] = useState(false);  
 


  return (
    <div className='searchBar'>
        {/* <input type="text" placeholder='Search Product Here..' className='inputArea'/> */}
        {/* <form onSubmit={searchHandler}> */}
        <form onSubmit={(e)=> e.preventDefault()}>
          <div className="input-group">
            <input
              type="text"
              // id="search_field"
              className="{form-control} inputArea"
              placeholder="Enter Product Name ..."
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </form>

    </div>
  )
}

export default SearchBar