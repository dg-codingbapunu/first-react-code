import AddTodo from "./component/Add todo";
import AppName from "./component/AppName";

import TodoItems from "./2 create react components/TodoItems";
import Welcome from "./component/Welcome";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoitems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added:${itemName} date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoitems(newTodoItems);
  };

  return (
    <center>
      <div className="todo-container">
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems === 0 && <Welcome></Welcome>}
        <TodoItems todoItems={todoItems}></TodoItems>
      </div>
    </center>
  );
}
export default App;
