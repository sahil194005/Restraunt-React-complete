import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
	const [isCart, setCart] = useState(true);
	const cartStateHandler = (val) => {
		setCart(val);
	};
	return (
		<div>
			<Cart
				cartStatus={isCart}
				setCartStatus={cartStateHandler}
			/>
			<Header setCartStatus={cartStateHandler} />
			<main>
				<Meals />
			</main>
		</div>
	);
}

export default App;
