import React from 'react'
// import SideBar from './components/leftsidebar/SideBar'
// import Products from './components/rightsidebar/Products'
// import SingleProduct from './products/Singleproduct'
import "./ProductPage.css"
import Header from './components/Header';
// import ProductCard from './components/rightsidebar/ProductCard';
import FilterProducts from './components/leftsidebar/FilterProducts';


function ProductPage() {
  return (
    <>
    <Header />

    <div className='main'>
        {/* <SideBar /> */}
        {/* <Products /> */}
        {/* <SingleProduct /> */}
        <FilterProducts />
        {/* <ProductCard /> */}
    </div>
    </>
  )
}

export default ProductPage