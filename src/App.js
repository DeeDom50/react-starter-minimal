import React from "react";
import "./app.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Counter from "./components/Counter";
import BigCircle from "./components/BigCircle";
import Hero from "./components/Hero";
import MoviesContainer from "./components/MoviesContainer";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Hero />
			<div className="container">
				<MoviesContainer />
			</div>
		</div>
	);
};

export default App;

