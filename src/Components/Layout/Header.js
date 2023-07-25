import React from "react";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
	return (
		<React.Fragment>
			<header>
				<h1>DownStairs </h1>
				<HeaderCartButton setCartStatus={props.setCartStatus}/>
			</header>
			<div>
				<img
					src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
					alt="food table"
				/>
			</div>
		</React.Fragment>
	);
};

export default Header;
