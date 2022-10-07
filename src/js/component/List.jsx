import React from "react";
import "./List.css";
import { HiOutlineTrash} from 'react-icons/hi';

HiOutlineTrash

const List = ({ task, deleteTasks, handleSubmit, todoList, setTodoList }) => {


    return (
        <>
            <div className="row">
                <div className="todolist-body">
                    <input
                        type="text"
                        name="todo-list"
                        id="todo-list"
                        placeholder="Add a task"
                        value={todoList}
                        className="input-todo col-md-12"
                        onChange={(e) => setTodoList(e.target.value)}
                        onKeyDown={handleSubmit}
                    />
                    <div className="container">
                        {task.length > 0 &&
                            task.map((todoList, index) => (

                                <div className="item-todo"
                                    key={index}>
                                    <li id={index}>
                                        {todoList.label}
                                    </li>
                                    <button
                                    className="delete-task-button"
                                        onClick={() => deleteTasks(index)}>
                                            <HiOutlineTrash/>
                                        </button>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default List;