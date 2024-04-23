import { useRef, useState } from "react";

import { IoIosAdd } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoname] = useState();
  const [dueDate, setDueDate] = useState();
  let noOfClicks = useRef(0);
  const handleNameChange = (event) => {
    setTodoname(event.target.value);
    noOfClicks.current += 1;
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    console.log(`no of update${noOfClicks.current}`);
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
            <IoIosAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
