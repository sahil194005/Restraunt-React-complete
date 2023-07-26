import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD": {
			const updatedTotalAmount =
				state.totalAmount +
				action.item.price * action.item.amount;
			const existingCartItemsIndex = state.items.findIndex(
				(item) => item.id === action.item.id
			);
			const existingCartItem =
				state.items[existingCartItemsIndex];
			let updatedItems;
			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					amount:
						existingCartItem.amount + action.item.amount,
				};
				updatedItems = [...state.items];
				updatedItems[existingCartItemsIndex] = updatedItem;
			} else {
				updatedItems = state.items.concat(action.item);
			}
			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		}
		case "REMOVE": {
			const existingCartItemsIndex = state.items.findIndex(
				(item) => {
					return item.id === action.id;
				}
			);

			const existingItem =
				state.items[existingCartItemsIndex];

			const updatedTotalAmount =
				state.totalAmount - existingItem.price;
			let updatedItems;
			if (existingItem.amount === 1) {
				updatedItems = state.items.filter((item) => {
					return item.id !== action.id;
				});
			} else {
				const updatedItem = {
					...existingItem,
					amount: existingItem.amount - 1,
				};
				updatedItems = [...state.items];
				updatedItems[existingCartItemsIndex] = updatedItem;
			}
			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		}
		default:
			return state;
	}
};
const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD", item: item });
	};
	const removeItemfromCartHandler = (id) => {
		dispatchCartAction({ type: "REMOVE", id: id });
	};
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemfromCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
