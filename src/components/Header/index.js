import React from "react";
import MenuItems from "./components/MenuItems";

const Header = () => {
	return (
		<header className="container-fluid">
			<div className="row">
				<div className="col-3">
					<h1>Logo</h1>
				</div>
				<nav className="col d-flex align-items-center">
					<ul className="d-flex list-unstyled align-items-center gap-3">
						<MenuItems text="Services" />
						<MenuItems text="Work" />
						<MenuItems text="Blog" />
						<MenuItems text="Contact" />
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;