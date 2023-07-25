import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
	const [isCart, setCart] = useState(true);
	return (
		<div>
			<Cart
				cartStatus={isCart}
				setCartStatus={(val) => {
					setCart(val);
				}}
			/>
			<Header />
			<main>
				<Meals />
			</main>
		</div>
	);
}

export default App;
