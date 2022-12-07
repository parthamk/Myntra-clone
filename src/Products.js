import React from 'react'
import Header from './components/Header'
// import Details from '../DetailsPage/Details'
import Sort from './components/Sort/Sort'
import Cards from './components/Product/Cards'

function ProductsPage() {
  return (
    <div>
        <Header />
        <Sort />
          <div className="outer-wrapper">
              <Cards />
          </div>
        
    </div>
  )
}

export default ProductsPage