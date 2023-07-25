import "./Cart.css";
import Modal from "react-modal";
const cartItems = [
	{
		id: "c1",
		name: "Sushi",
		amount: 2,
		price: 12.99,
	},
	{
		id: "c2",
		name: "Dumplings",
		amount: 2,
		price: 16.5,
	},
	{
		id: "c3",
		name: "Dumplings",
		amount: 2,
		price: 16.5,
	},
	
];

const Item = cartItems.map((item) => {
	return <div className="cart-content" key={item.id}>
	<div className="cart-content--name">
		<h2>{item.name}</h2>
		<div className="cart-content--name__button">
			<button>-</button>
			<button>+</button>
		</div>
	</div>
	<div className="cart-content--price">
			<span>{ item.price} $</span>
		<input value="*4" readOnly></input>
	</div>
</div>
})
const customStyles = {
	content: {
		top: "30%",
		left: "15%",
		right: "15%",
		bottom: "30%",
		borderRadius: "15px",
	},
};
const Cart = (props) => {
	Modal.setAppElement("#root");

	return (
		<Modal
			style={customStyles}
			isOpen={props.cartStatus}
			onRequestClose={() => props.setCartStatus(false)}
		>
			{Item}
			<div className="cart-total">
			<h1>Total Amount</h1>
			<h1>$88.99</h1>
			</div>
			<div className="cart-total-buttons">
				<button className="cart-close-btn" onClick={()=>{props.setCartStatus(false)}}>Close</button>
				<button className="cart-order-btn">Order</button>
			</div>

		</Modal>
	);
};
export default Cart;
