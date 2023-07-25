import "./AvailableMeals.css";

const DUMMY_MEALS = [
	{ id: "m1", name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
	{ id: "m2", name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
	{ id: "m3", name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
	{ id: "m4", name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
];

const AvailableMeals = (props) => {
	const mealsList = DUMMY_MEALS.map((meal) => {
	return	<li key = {meal.id}>{meal.name}</li>;
	});
	return (
		<section>
			<ul>{mealsList}</ul>
		</section>
	);
};

export default AvailableMeals;
