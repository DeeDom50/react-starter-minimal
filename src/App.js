import React from 'react';
import "./app.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Button from "./components/Button";

const App = () => {
  return (
	  <div className={"app-wrapper"}>
      <Header />
		  <button color="danger">
			  <span>Sign Up</span>
		  </button>
		  {/*<Main>*/}
			{/*  <div  className="container d-flex flex-column">*/}
			{/*	  <h1>Visual Design & Development</h1>*/}
			{/*  </div>*/}
		  {/*</Main>*/}
    </div>
  );
};

export default App;
