import "./Card.css";
const Card = (props) => {
	const classes = `Card ${props.children}`;

	return <div className={classes}> {props.children}</div>;
};

export default Card;
