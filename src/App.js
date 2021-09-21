import React from "react";
import "./App.css";
//Importing components
import Form from "./components/Form";

function App() {
	return (
		<div className="App">
			<header>
				<h1>React Todo List</h1>
			</header>
			<Form />
		</div>
	);
}

export default App;
