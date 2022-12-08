/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/features/data";
import "./Modal.css";
import "./Cards.css";

const Cart = () => {
	const cartData = useSelector(state => state.appData.value.cart)
	const dispatch = useDispatch();
	//  removeFromWishList
	return (
		<>
			<div className="modal-wrapper">
				<div className="inner-head">
					<div className="flexed flex-end">Your Cart Details</div>
					<div className="popcart-right-content">
						{cartData.map((value, index) => {
							const { id, pname, product, category, imgscr, price, visible } =
								value;
							return visible ? (
								<div className="popcard-bg-wrapper inner-card container" key={index}>
									<div className="popcard-wrapper">
										<div className="slider">
											<img src={imgscr} alt="" className="popcart-product-image" />
											{/* <div className="slide"></div> */}
											{/* <div class="slide"></div>
											<div class="slide"></div> */}
										</div>
										<div className="popcard-info">
											<div className="popcard-info-wrap">
												<h3 className="inner-card-category">{pname}</h3>
												<p className="inner-card-title">{product}</p>
												<p className="inner-card-price">{price}</p>
											</div>
											<div className="wishlist-wrapper">
												<button
													className="wishlist"
													onClick={() => {
														dispatch(removeFromCart(value));
													}}
												>
													Remove from Cart
												</button>
											</div>
										</div>
									</div>
								</div>
							) : null;
						})}
						{/* {JSON.stringify(wishlistData, 3, 3)} */}
					</div>
				</div>
			</div>
		</>
	)
}
export default Cart;
