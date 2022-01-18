import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todoList, setTodolist] = useState([]);
	const [todo, setTodo] = useState("");

	useEffect(() => {
		console.log("EN EL USE EFFECT");
	}, []);

	const handelChange = (event) => {
		console.log(event.target.name);
		setTodo(event.target.value);
	};
	console.log(todo);

	const addNewTodo = (e) => {
		e.preventDefault();
		console.log("submit");
		setTodolist([...todoList, todo]);
	};
	console.log(todoList);

	return (
		<div>
			<form onChange={handelChange} onSubmit={addNewTodo}>
				<input name="new-todo" type="text"></input>
				<button type="submit"> save todo </button>
			</form>
			<ul>
				{todoList.map((todoPrint) => (
					<li>{todoPrint}</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
