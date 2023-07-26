import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
	const [isCart, setCart] = useState(true);
	const cartStateHandler = (val) => {
		setCart(val);
	};
	return (
		<CartProvider>
			<Cart
				cartStatus={isCart}
				setCartStatus={cartStateHandler}
			/>
			<Header setCartStatus={cartStateHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
