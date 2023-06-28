import React, { useState } from "react";
import "./todo.css";

const CreateRUD = () => {
  // Create start

  const [todo, setTodo] = useState({
    task: "",
    status: "",
    date: "",
  });

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });

    console.log(todo);
  };

  // Create end

  // Read start

  const [readData, setReadData] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    if(editButton){

        const editableData = readData;
        Object.assign(editableData[editReplace], todo)
        setReadData([...editableData])

        setTodo({
          task: "",
          status: "",
          date: "",
        });

    }

    else{
        setReadData([...readData, todo]);

    
    }

    console.log(todo);
  };

  // Read end

  // Delete Start

  const handleDelete = (otherIndex) => {
    const filteredData = readData.filter(
      (currentData, index) => otherIndex !== index
    );
    setReadData(filteredData);
  };

  // Delete End

  // Edit start
  const [editButton, setEditButton] = useState(false);
  const [editReplace, setEditReplace] = useState("")
  const handleEdit = (index) => {

    setEditButton(true);
    const dataEdited = readData[index];
    setTodo({
      task: dataEdited.task,
      status: dataEdited.status,
      date: dataEdited.date,
    });

    setEditReplace(index)
   
  };

  

  // Edit end

  return (
    <>
      <div className="main-div">
        <div className="todo-div">
          <h1 className="main-heading">
            <span className="icon-todo">
              <i className="bi bi-check-square-fill"></i>
            </span>
            To-Do App
          </h1>
          <form onSubmit={onSubmit} className="inpur-parent">
            <div className="input-parent">
              <input
                type="text"
                name="task"
                value={todo.task}
                placeholder="Enter To Do..."
                className="input-todo"
                onChange={handleChange}
                autoComplete="off"
              />
              <input
                type="text"
                name="status"
                value={todo.status}
                placeholder="Status"
                className="input-todo"
                onChange={handleChange}
                autoComplete="off"
              />

              <input
                type="date"
                name="date"
                value={todo.date}
                className="date"
                onChange={handleChange}
                autoComplete="off"
              />
              <button type="submit" className="add-button">
                <i className="bi bi-plus-square-fill"></i>
              </button>
            </div>
          </form>
          <hr className="hr" />
        </div>
        <div className="display-data">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody className="render-data">
              {readData.map((currentData, index) => {
                return (
                  <tr className="row">
                    <td className="table-data">{currentData.task}</td>
                    <td className="table-data">{currentData.status}</td>
                    <td className="table-data">{currentData.date}</td>
                    <td className="table-data">
                      <button
                        onClick={() => handleEdit(index)}
                        className="ud-button first"
                      >
                        {editButton? <i className="bi bi-pen-fill"></i>:<i className="bi bi-pen-fill"></i>}
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="ud-button second"
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CreateRUD;
