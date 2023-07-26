import React from "react";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import "./HeaderCartButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const numberOfCartItems = cartCtx.items.reduce((currNumber,item) => {
		return currNumber + item.amount;
	},0)
	return (
		<button
			className="Header-cart"
			onClick={() => {
				props.setCartStatus(true);
			}}>
			<span>
				<FontAwesomeIcon icon={faShoppingCart} />
			</span>
			<span> Cart</span>
			<span>
				<div>{numberOfCartItems}</div>
			</span>
		</button>
	);
};

export default HeaderCartButton;
