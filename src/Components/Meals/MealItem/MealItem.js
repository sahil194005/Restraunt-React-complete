import React from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
const DUMMY_MEALS = [
	{ id: "m1", name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
	{ id: "m2", name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
	{ id: "m3", name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
	{ id: "m4", name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
];
const MealItem = () => {
	const mealsList = DUMMY_MEALS.map((meal) => {
		return (
			<li key={meal.id} className="mealItem--li">
				<div className="mealItem--li__details">
					<span className="name">{meal.name}</span>
					<span className="description">{meal.description}</span>
					<span className="price">${meal.price}</span>
				</div>

				<MealItemForm  />
			</li>
		);
	});
	return <React.Fragment>{mealsList}</React.Fragment>;
};

export default MealItem;
