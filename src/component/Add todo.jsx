import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoname] = useState();
  const [dueDate, setDueDate] = useState();
  const handleNameChange = (event) => {
    setTodoname(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoname("");
  };

  return (
    <div className="container text-center">
      <div className="row dg-row ">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
