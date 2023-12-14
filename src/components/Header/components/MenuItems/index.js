const MenuItems = (props) => {
	return (
		<li>
			<a href={props.link}>{props.text}</a>
		</li>
	);
};

export default MenuItems;