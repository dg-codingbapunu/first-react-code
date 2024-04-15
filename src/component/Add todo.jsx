import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoname] = useState();
  const [dueDate, setDueDate] = useState();
  const handleNameChange = (event) => {};
  const handleDateChange = (event) => {};

  return (
    <div className="container text-center">
      <div className="row dg-row ">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => onNewItem("a", "b")}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
