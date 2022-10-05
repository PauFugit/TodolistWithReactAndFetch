import {useState, useEffect} from "react";
import React from "react";
import List from "./List.jsx";



const Home = () => {

	const [task, setTask] = useState([]);
	const [todoList, setTodoList] = useState ("");
	const [error, setError] = useState("null");

	const tasks = async () =>{
		fetch("http://assets.breatheco.de/apis/fake/todos/user/paufugit")
		.then((response) => response.json())
		.then((data) => setTask(data))
		.catch((error) => console.log(error));
	};

	useEffect(()=> {
		tasks();
	}, []);

	const addTask = async()=> {
		fetch("http://assets.breatheco.de/apis/fake/todos/user/paufugit",{
			method:"PUT",
			body: JSON.stringify(task),
			headers: {
				"Content-Type": "application/json",
			},
		})

			.then ((response)=>response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

	const handleSubmit = (e) =>{
		if (e.key === "Enter" && todoList !== ""){
			let arr = [...task];
			let newTask = {"label": e.target.value, "done": false}
			arr.push(newTask);
			setTask(arr);
			setTodoList("");
			addTask();
		} else if (e.key === "Enter"){
			console.log("You must add a task");
			setError("Please, add a task")
		}
	};


	const deleteTasks = (index) => {
		let arr = [...task];
		arr[index]=null;
		let filtered = arr.filter((e) => e !== null);
		setTask(filtered);
	}

	const deleteAll = () => {
		setTask([]);
	};




	return (
		
		<div className="container">

			<div className="div">
				<h1> Todo </h1>
				<div className="todolist">
				<List
					task={task}
					setTask={setTask}
					todoList={todoList}
					setTodoList={setTodoList}
					handleSubmit={handleSubmit}
					deleteTasks={deleteTasks}
					/>

				</div>

			<div className="row">
				<div className="delete">
					<div className="row">
						<div className="col">
							<button
							type="button"
							onClick={deleteAll}
							>Delete tasks</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
};

export default Home;
