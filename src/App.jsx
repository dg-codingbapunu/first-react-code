import AddTodo from "./component/Add todo";
import AppName from "./component/AppName";

import TodoItems from "./2 create react components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const inttodoItems = [
    {
      name: "Go To College",
      dueDate: "20/04/2024",
    },
    {
      name: "Watch Ipl",
      dueDate: "14/04/2024",
    },
    {
      name: "learn react",
      dueDate: "14/02/2024",
    },
  ];
  const [todoItems, setTodoitems] = useState(inttodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added:${itemName} date:${itemDueDate}`);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}
export default App;
