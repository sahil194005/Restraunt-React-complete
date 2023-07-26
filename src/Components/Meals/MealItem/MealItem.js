import React from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Sushi",
		description: "Finest fish and veggies",
		price: 22.99,
	},
	{
		id: "m2",
		name: "Sandwich",
		description: "Grilled chicken with fresh vegetables",
		price: 14.99,
	},
	{
		id: "m3",
		name: "Veg Pizza",
		description:
			"Delicious pizza with a variety of veggies",
		price: 18.5,
	},
	{
		id: "m4",
		name: " Burger",
		description:
			"Juicy beef patty with cheese and toppings",
		price: 16.75,
	},
	{
		id: "m5",
		name: "Pasta Alfredo",
		description:
			"Creamy Alfredo sauce with pasta and garlic bread",
		price: 12.99,
	},
];
const MealItem = () => {
	const mealsList = DUMMY_MEALS.map((meal) => {
		return (
			<li key={meal.id} className="mealItem--li">
				<div className="mealItem--li__details">
					<span className="name">{meal.name}</span>
					<span className="description">
						{meal.description}
					</span>
					<span className="price">${meal.price}</span>
				</div>

				<MealItemForm
					mealobj={{
						name: meal.name,
						price: meal.price,
						id: meal.id,
					}}
				/>
			</li>
		);
	});
	return <React.Fragment>{mealsList}</React.Fragment>;
};

export default MealItem;
