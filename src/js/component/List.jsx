import React from "react";



const List = ({task, setTask, deleteTasks, handleSubmit, todoList, setTodoList}) => {


    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <input
                    type= "text"
                    name="todo-list"
                    id="todo-list"
                    value={todoList}
                    className="input-todo"
                    placeholder="add a task"
                    onChange={(e) => setTodoList(e.target.value)}
                    onKeyDown={(e) => handleSubmit(e)}
                    />

                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <ul className="tasks">
                        {task.length > 0 &&
                        task.map((todoList, index) => (
                            <div className="item-todo"
                                key={index}
                            >
                                <li id={index}>
                                    {todoList.label}
                                </li>
                                <div className="trash" index={index}>
                                    <button className="delete"
                                    onClick={() => deleteTasks(index)}/>
                                </div>
                                </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default List;