import React from "react";
import "./HeaderCartButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const HeaderCartButton = (props) => {
	return (
		<button className="Header-cart" >
			<span>
				<FontAwesomeIcon icon={faShoppingCart} />
			</span>
			<span> Cart</span>
			<span><div>3</div></span>
		</button>
	);
};

export default HeaderCartButton;
