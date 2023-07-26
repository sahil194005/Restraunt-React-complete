import "./MealItemForm.css";
import { useRef } from "react";
import { useContext } from "react";
import CartContext from "../../../Store/cart-context";
const MealItemForm = (props) => {
	const cartctx = useContext(CartContext);
	const amountRef = useRef(null);
	const submitHandler = (e) => {
		e.preventDefault();
		let enteredAmount = +amountRef.current.value;

		let finalobj = {
			...props.mealobj,
			amount: enteredAmount,
			
		};
		amountRef.current.value = "";
		cartctx.addItem(finalobj);
	};
	return (
		<div className="Form">
			<form onSubmit={submitHandler}>
				<section>
					<label>Amount</label>
					<input ref={amountRef} type="number"></input>
				</section>
				<button>+Add</button>
			</form>
		</div>
	);
};

export default MealItemForm;
