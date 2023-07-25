import "./MealItemForm.css";
const MealItemForm = (props) => {
	return (
		<div className="Form">
			<form>
				<section>
					<label>Amount</label>
					<input type="number"></input>
				</section>
				<button>+Add</button>
			</form>
		</div>
	);
};

export default MealItemForm;
