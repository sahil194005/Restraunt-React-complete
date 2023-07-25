import "./AvailableMeals.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
	return (
		<section className="mealList">
			<ul>
				<MealItem />
			</ul>
		</section>
	);
};

export default AvailableMeals;
