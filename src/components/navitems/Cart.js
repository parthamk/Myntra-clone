import React, {useState} from 'react'
// import { BsCartFill } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import PopCart from "../Product/PopCart";
import "./Cart.css"

function Cart() {

	const [showCart, setShowCart] = useState(false)
	const cartData = useSelector((state) => state.appData.value.cart )
  return (
    <div>
        {/* <BsCartFill className='carticon'/> */}
        <div className="user-profile">
					<div className="cart-container">

						{/* Cart */}
						<div className="cart-item-wrap">
							{/* onClick={() => {setShowCart(!showCart)}}  */}
							<div onMouseOver={() => {setShowCart(!showCart)}}>
                <FontAwesomeIcon icon={faBagShopping} className="font-color carticon" />
              </div>
              <div className="cart-item-count">{`${cartData?.length > 0 ? cartData.length: ''}`}</div> 
						</div>
					</div>
				</div>
		    {
			    showCart && <PopCart />
		    }
    </div>
  )
}

export default Cart