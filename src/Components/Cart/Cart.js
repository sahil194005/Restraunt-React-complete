import "./Cart.css";
import Modal from "react-modal";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

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
	const cartCtx = useContext(CartContext);
	const Item = cartCtx.items.map((item) => {
		return (
			<div className="cart-content" key={item.id}>
				<div className="cart-content--name">
					<h2>{item.name}</h2>
					<div className="cart-content--name__button">
						<button>-</button>
						<button>+</button>
					</div>
				</div>
				<div className="cart-content--price">
					<span>{item.price} $</span>
					<input value="*4" readOnly></input>
				</div>
			</div>
		);
	});
	const total_amount = cartCtx.totalAmount.toFixed(2);
	const hasItems = cartCtx.items.length>0
	return (
		<Modal
			style={customStyles}
			isOpen={props.cartStatus}
			onRequestClose={() => props.setCartStatus(false)}>
			
			{Item}
			<div className="cart-total">
				<h1>Total Amount</h1>
				<h1>${ total_amount}</h1>
			</div>
			<div className="cart-total-buttons">
				<button
					className="cart-close-btn"
					onClick={() => {
						props.setCartStatus(false);
					}}>
					Close
				</button>
			{hasItems&&	<button className="cart-order-btn">Order</button>}
			</div>
		</Modal>
	);
};
export default Cart;
