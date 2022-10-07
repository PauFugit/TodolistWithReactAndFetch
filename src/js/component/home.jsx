import { useState, useEffect } from "react";
import React from "react";
import List from "./List.jsx";
import "./home.css";


const Home = () => {

	const [task, setTask] = useState([]);
	const [todoList, setTodoList] = useState("");
	

	const tasks = async () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/paufugit")
			.then((response) => response.json())
			.then((data) => setTask(data))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		tasks();
	}, []);

	const addTask = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/paufugit", {
			method: "PUT",
			body: JSON.stringify(task),
			headers: {
				"Content-Type": "application/json",
			},
		})

			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

	const handleSubmit = (e) => {
		if (e.key === "Enter" && todoList !== "") {
			let arr = [...task];
			let newTask = { label: e.target.value, done: false };
			arr.push(newTask);
			setTask(arr);
			setTodoList("");
			addTask();
		} else if (e.key === "Enter") {
			window.alert("You must add a task")
		}
	};

	const deleteTasks = (index) => {
		let arr = [...task];
		arr[index] = null;
		let filtered = arr.filter((e) => e !== null);
		setTask(filtered);
	}

	const deleteAll = () => {
		setTask([]);
	};


	return (

		<div className="container-fluid todolist">
			<div className="row">
				<div className="col-md-12">
					<div className="title-todo">
						<h1 className="text-center"> Todo list </h1>
						</div>
						<div className="todolist-list">
							<List
								task={task}
								setTask={setTask}
								todoList={todoList}
								setTodoList={setTodoList}
								handleSubmit={handleSubmit}
								deleteTasks={deleteTasks}
							/>
						</div>
				
					<div className="col-md-11 delete">
						<button
							type="button"
							className="delete-button"
							onClick={deleteAll}
						>Delete all</button>
					</div>
						
					
				</div>
			</div>
		</div>

	);
};

export default Home;
